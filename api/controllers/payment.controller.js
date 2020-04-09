const config = require('config');
const paypal = require('paypal-rest-sdk');
const payModel = require('../models/pay.model');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': config.get('paypal_clientId'),
    'client_secret': config.get('paypal_secret')
});

exports.pay = function(req, res){

    const name = req.body.name;
    const price = req.body.price;
    const userId = req.user;
    const eventId = req.body.event_id;

    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/api/pay/success?userId="+userId+"&eventId="+eventId,
            "cancel_url": "http://localhost:3000/api/pay/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": name,
                    "sku": "001",
                    "price": price,
                    "currency": "CAD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "CAD",
                "total": price
            },
            "description": "Contributing money"
        }]
    };
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log(payment.transactions[0].amount);
            for(let i = 0;i < payment.links.length;i++){
              if(payment.links[i].rel === 'approval_url'){
                return res.send(payment.links[i].href);
              }
            }
        }
      });
};

exports.success = function(req, res){
    console.log('req/query',req.query)
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const userId = req.query.userId;
  const eventId = req.query.eventId;

  console.log(`userId: ${userId} -- eventId: ${eventId}`)

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "CAD",
            "total": "10.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        await payModel.create({
            userId: userId,
            amount: payment.transactions[0].amount.total,
            firstname: payment.payer.payer_info.first_name,
            lastname: payment.payer.payer_info.last_name,
            eventId: eventId
        }, function(err, data){
            if(err){
                return res.status(400).send('Error Encountered while processing the payment!'+err);
            }
            console.log(JSON.stringify(payment));
            res.send('Success');
        });
    }
});
};

exports.cancel = function(req, res){
    res.send('Payment Cancelled!');
};

