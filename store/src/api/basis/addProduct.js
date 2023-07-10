import axios from "../axios";

const addProduct=async(name, category_id, quantity, sku, price)=>{
    return  axios.post('/product/', {
        name: name,
        category_id: category_id,
        quantity: quantity,
        SKU: sku,
        price: price,
    }
    ,{headers:{authorization:sessionStorage.getItem("token")}}
    )
}
export default addProduct