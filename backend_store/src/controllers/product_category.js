const Product_category = require('../models/product_category.js')
const Product = require('../models/product.js')

const viewAllCategories = (req, res) => {
    try{
        Product_category.find()
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
    }catch(error) {
        res.json({
            message: "Error"
        })
    }
}

const getCategory = async (req, res) => {
    try{
        await Product_category.findById(req.params.id).then(e => {
            return res.json(e)
        }).catch(err => {
            return res.json({message: 'An error Occured!'})
        })
    }catch(error){
        return res.json({message: "Error"})
    }
}

const createCategory = async (req, res, next) => {
    try{
        let body = req.body

        let product_category = new Product_category({
            name: body.name,
        })

        product_category.save()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            console.log(error)
            res.json({
                message: 'An error Occured!'
            })
        })
    }catch(error) {
        res.json({
            message: "Error"
        })
    }
}

const updateCategory = async (req, res) => {
    try{
        const body = req.body

        let updatedData = {
            name: body.name,
        }
    
        await Product_category.findByIdAndUpdate(req.params.id, {$push: updatedData}).then(e => {
            return res.status(200).json({
                message: "Update category is successful!"
            })
        }).catch(err => {
            return res.json({message: 'An error Occured!'})
        })
    }catch(error){
        return res.json({message: "Error"})
    }
}

const deleteCategory = async (req, res) => {
    try{
        await Product.find({category_id: req.params.id}).then(async(e) => {
            for(var i = 0; i < e.length; i++){
                await Product.findByIdAndDelete(e[i]._id)
            }
            await Product_category.findByIdAndDelete(req.params.id).then(e => {
                return res.status(200).json({
                    message: "Remove category is successful!"
                })
            }).catch(err => {
                return res.json({message: 'An error Occured!'})
            })
        }).catch(err => {
            return res.json({message: "An error Occured!"})
        })
    }catch(error) {
        return res.json({message: "Error"})
    }
}

module.exports = {
    viewAllCategories, getCategory, createCategory, updateCategory, deleteCategory
}