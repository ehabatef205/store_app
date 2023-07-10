import axios from "../axios";

const removeCategory=async(id)=>{
    return  axios.delete(`/product_category/${id}`
    ,{headers:{authorization:sessionStorage.getItem("token")}}
    )
}
export default removeCategory