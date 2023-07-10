const {Router} = require('express')
const product_controller = require('../../controllers/product')
const { checkToken } = require('../../auth/token_validation')

const router = Router()

router.get('/:id', checkToken, product_controller.getProduct)
router.get('/category/:id', checkToken, product_controller.getProductByCategory)
router.get('/SKU/:id', product_controller.getProductBySKU)
router.post('/', checkToken, product_controller.createProduct)
router.put('/:id', checkToken, product_controller.updateProduct)
router.delete('/:id', checkToken, product_controller.deleteProduct)

module.exports = router