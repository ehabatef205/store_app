import axios from "../axios";

const getProducts= async (id)=>{
    return await axios.get(`/product/category/${id}`,{headers:{authorization: sessionStorage.getItem("token")}})
}
export default getProducts