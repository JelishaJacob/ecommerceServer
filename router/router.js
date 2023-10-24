// import express
const express = require('express')
const { adminLogin, addProduct, getProducts, editProduct,
    deleteProduct, getProduct, userSignUp, userLogin, addToCart,
    cartCount, cartProducts, priceTotal, QuantityIncrement, QuantityDecrement, removeCart, addWishlist, wishlistProducts, removeWishlist, getUsers, deleteUser } = require('../controllers/logic')
// router object
const router = new express.Router()

// adminLogin()
router.post('/admin/login', adminLogin)

// add product
router.post('/admin/add-product', addProduct)

// getProducts
router.get('/product-access', getProducts)

// editProducts
router.put('/product-update/:id', editProduct)

// getProduct - one product 
router.get('/singleprodect-access/:id', getProduct)

// deleteProduct
router.delete('/product-delete/:id', deleteProduct)

// userSignUp
router.post('/user-register', userSignUp)

// userLogin
router.post('/user-login', userLogin)

// addToCart
router.post('/addtocart', addToCart)

// cartCount
router.get('/cart-count/:userId', cartCount)

// cartProducts
router.get('/cart-products/:userId', cartProducts)

// cart Price-Total
router.get('/price-total/:userId', priceTotal)

// Quantity Increment Decrement
router.get('/quantity-update-inc/:_id', QuantityIncrement)
router.get('/quantity-update-dec/:_id', QuantityDecrement)

// remove cart item
router.delete('/remove-cart/:_id', removeCart)

// add to wishlist
router.post('/add-to-wishlist', addWishlist)

// wishlistProducts
router.get('/wishlist-products/:userId', wishlistProducts)

// Remove wishlist Item
router.delete('/remove-wishlist/:_id', removeWishlist)

// view users
router.get('/user-access', getUsers)

// delete users
router.delete('/user-delete/:_id',deleteUser)

// export router
module.exports = router
