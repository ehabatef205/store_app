const {Router} = require('express')
const product_category = require('../../controllers/product_category')
const { checkToken } = require('../../auth/token_validation')

const router = Router()

router.get('/', checkToken, product_category.viewAllCategories)
router.get('/:id', checkToken, product_category.getCategory)
router.post('/', checkToken, product_category.createCategory)
router.put('/:id', checkToken, product_category.updateCategory)
router.delete('/:id', checkToken, product_category.deleteCategory)

module.exports = router