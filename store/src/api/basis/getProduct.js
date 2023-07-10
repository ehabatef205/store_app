import axios from "../axios";

const getProduct= async (id)=>{
    return await axios.get(`/product/SKU/${id}`)
}
export default getProduct