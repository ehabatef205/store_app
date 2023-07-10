const Product = require('../models/product.js')

const createProduct = async (req, res, next) => {
    try{
        const body = req.body

        
        const isNewProduct = await Product.isThisSKU(body.SKU)
        if(!isNewProduct){
            return res.json({
                message: 'This product is already exist'
            })
        }

        const product = new Product({
                name: body.name,
                category_id: body.category_id,
                quantity:body.quantity,
                SKU:body.SKU,            
                price:body.price
        })
        
        await product.save()
        .then(response => {
            res.json({
               response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
    }catch(error){
        res.json({
            message: "Error"
        })
    }
}

const getProduct = async (req, res) => {
    try{
        await Product.findById(req.params.id).then(e => {
            return res.json(e)
        }).catch(err => {
            return res.json({message: "An error Occured!"})
        })
    }catch(error){
        return res.json({message: "Error"})
    }
}

const getProductByCategory = async (req, res) => {
    try{
        await Product.find({category_id: req.params.id}).then(e => {
            return res.json(e)
        }).catch(err => {
            return res.json({message: "An error Occured!"})
        })
    }catch(error){
        return res.json({message: "Error"})
    }
}

const getProductBySKU = async (req, res) => {
    try{
        await Product.find({SKU: req.params.id}).then(e => {
            return res.json(e[0])
        }).catch(err => {
            return res.json({message: "An error Occured!"})
        })
    }catch(error){
        return res.json({message: "Error"})
    }
}

const updateProduct = async (req, res) => {
    try{
        const body = req.body

        let updatedData = {
            name: body.name,
            category_id: body.category_id,
            quantity: body.quantity,
            SKU: body.SKU,
            price: body.price
        }

        await Product.findByIdAndUpdate(req.params.id, {$set: updatedData}).then(e => {
            return res.status(200).json({
                message: "Update product is successful!"
            })
        }).catch(err => {
          
            return res.json({message: 'An error Occured!'})
        })
    }catch(error){
        res.json({message: "Error"})
    }
}

const deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id).then(e => {
            return res.status(200).json({
                message: "Remove product is successful!"
            })
        }).catch(err => {
            
            return res.json({message: "Error"})
        })
    }catch(error){
        res.json({message: "Error"})
    }
}

module.exports = {
    createProduct, getProduct, getProductBySKU, getProductByCategory, updateProduct, deleteProduct
}