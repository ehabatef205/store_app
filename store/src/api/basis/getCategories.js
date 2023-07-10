import axios from "../axios";

const getCategories= async ()=>{
    return await axios.get("/product_category",{headers:{authorization: sessionStorage.getItem("token")}})
}
export default getCategories