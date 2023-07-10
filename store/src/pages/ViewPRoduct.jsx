import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import getCategories from "../api/basis/getCategories"
import getProduct from "../api/basis/getProduct"
import { FaSpinner } from 'react-icons/fa';
import "./style.css"
import "./table.css"

export default function ViewProduct() {
    const [loading,setLoading]=useState(true)
    const [category_id, setCategoryId] = useState("")
    const [product, setProduct] = useState(null)
    const params = useParams();

    useEffect(()=>{
          setLoading(true)
          getProduct(params.SKU).then(res=>{
            setProduct(res.data)
            setLoading(false)
          }).catch((error) => {
            setLoading(true)
          })
        }
    , [])

    return (
        <Container className="d-flex justify-content-evenly nav2 w-100">
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <div className="me-auto text-dark w-100" style={{padding: "10px", justifyContent: "center", alignItems: "center", flexDirection: "column", display:"flex", height: "calc(100vh - 20px)"}}>
               <p>Name: {product.name}</p>
               <p>Quantity: {product.quantity}</p>
               <p>SKU: {product.SKU}</p>
               <p>Price: {product.price}</p>
            </div>}
        </Container>
    );
}