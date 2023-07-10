import axios from "../axios";

const removeProduct=async(id)=>{
    return  axios.delete(`/product/${id}`
    ,{headers:{authorization:sessionStorage.getItem("token")}}
    )
}
export default removeProduct