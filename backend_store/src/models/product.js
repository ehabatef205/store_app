const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productschema = new Schema({
    name: {
        type: String,
        required:true
    },
    category_id: {
        type: String,
    },
    quantity:{
        type: Number,
        default: 0
    },
    SKU: {
        type: String,
        required:true,
        unique:true
    },
    price: {
        type:Number,
        default:0
    },
}, { timeseries: true })

productschema.statics.isThisSKU = async function (SKU) {
    if(!SKU) throw new Error('Invalid SKU')
    try{
        const product = await this.findOne({SKU})
        if(product) return false
    
        return true
    }catch (error){
        console.log('error inside isThisSKU method ', error.message)
        return false
    }
}

const Product = mongoose.model("Product", productschema)


module.exports = Product