import axios from "../axios";

const addCategory=async(name)=>{
    return  axios.post('/product_category/', {
        name: name,
    }
    ,{headers:{authorization:sessionStorage.getItem("token")}}
    )
}
export default addCategory