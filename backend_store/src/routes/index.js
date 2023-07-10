const product_router=require('./api/product')
const product_category_router=require('./api/product_category')
const UserRoute = require('./api/UserRouter')
const {Router} = require('express')

const router = Router()

router.use('/product',product_router)
router.use('/product_category',product_category_router)
router.use('/user', UserRoute)

module.exports = router