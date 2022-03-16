const express = require("express")
const stripe = require("stripe")("sk_test_51KdoCzSA5gxdKnIvDYc5Bs7nK2Tx8HzJYpLJo3aVv4coLZ44NM6RPp3cumj3tVqBU7MLIZVh7cNo6KtYG8O1GRkD00fXb6y9aF")
const uuid = require("uuid")

const router = express.Router();


router.post("/", (req, res) => {
    const { token, subscription } = req.body;
    console.log("SUBSCRIPTION", "PRICE", subscription, subscription.price);
    const idempotencyKey = uuid.v4();
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        console.log("customerID", customer.id)
        return stripe.paymentIntents.create({
            amount: subscription.price * 100,
            customer: customer.id,
            currency: "INR",
            receipt_email: token.email,
            description: 'Thank you for your subscription.'
        }, { idempotencyKey }).then(result => res.status(200).send(result))
    }).catch(error => {
        console.error(error)
        return res.status(500).send(error)
    });
})

module.exports = router