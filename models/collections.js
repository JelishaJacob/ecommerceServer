// create model 

// use mongoose library
// import mongoose
const mongoose = require('mongoose')

// define schema - fields and values of model (collection)
//  // adminSchema
const adminSchema = new mongoose.Schema({
    uname: String,
    psw: String
})

// modelName - Collection Name
const admins = new mongoose.model("admins", adminSchema)


// // productSchema
const productSchema = new mongoose.Schema({
    pname: String,
    description: String,
    price: Number,
    image: String,
    rating: Number,
    count: Number
})
// products - model
const products = new mongoose.model("products", productSchema)

// users
const userSchema = new mongoose.Schema({
    email: String,
    psw: String
})

const users = new mongoose.model("users", userSchema)

// cart
const cartSchema = new mongoose.Schema({
    userId: String,
    pId: String,
    pname: String,
    description: String,
    price: Number,
    image: String,
    rating: Number,
    quantity: Number,
    totalPrice: Number
})
const carts = new mongoose.model("carts", cartSchema)

// wishlist
const wishlistSchema = new mongoose.Schema({
    userId: String,
    pId: String,
    pname: String,
    description: String,
    price: Number,
    image: String,
    rating: Number
})
const wishlists = new mongoose.model("wishlists", wishlistSchema)

// export model - to import in another file , it has to be exported from here
module.exports = { admins, products, users, carts, wishlists }