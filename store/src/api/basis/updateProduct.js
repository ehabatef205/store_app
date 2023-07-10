import axios from "../axios";

const updateProduct=async(id, name, category_id, quantity, sku, price)=>{
    return  axios.put(`/product/${id}`, {
        name: name,
        category_id: category_id,
        quantity: quantity,
        SKU: sku,
        price: price
    }
    ,{headers:{authorization:sessionStorage.getItem("token")}}
    )
}
export default updateProduct