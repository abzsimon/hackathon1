const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    trip : { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
    isPaid : Boolean
});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;