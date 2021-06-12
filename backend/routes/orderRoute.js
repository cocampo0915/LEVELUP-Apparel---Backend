const express = require('express');
const Order = require('../models/orderModel');
const util = require('../util');

const router = express.Router();

router.get('/:id', util.isAuth, async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
        res.send(order);
    }
    else {
        res.status(404).send('Order not found.');
    }
});

router.post('/', util.isAuth, async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: 'New order created', data: newOrderCreated });
});

module.exports = router;