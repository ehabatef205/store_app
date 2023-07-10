import {React, useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import getCategories from "../api/basis/getCategories"
import getProducts from "../api/basis/getProducts"
import { FaSpinner } from 'react-icons/fa';
import "./style.css"
import "./table.css"
import QRCode from "react-qr-code";

export default function ViewProducts() {
    const [categories, setCategories]=useState([])
    const [loading,setLoading]=useState(true)
    const [category_id, setCategoryId] = useState("")
    const [products, setProducts] = useState([])

    useEffect(()=>{
          setLoading(true)
          getCategories().then(res=>{
            setCategories(res.data.response)
            setLoading(false)
          }).catch((error) => {
            setLoading(true)
          })
        }
    , [])

    const getProductsByCategoryId = async(id) => {
        setCategoryId(id)
        setProducts([])
        getProducts(id).then(res =>{
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container className="d-flex justify-content-evenly nav2 w-100">
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <div className="me-auto text-dark w-100 justify-content-center" style={{textAlign: "center"}}>
                {categories.map((category, indexOfCategory) => (
                    <div className="text-dark " key={indexOfCategory} style={{display: "inline-flex", margin: "20px", cursor: "pointer"}}>
                        <b onClick={() => {getProductsByCategoryId(category._id)}}>{category?.name}</b>
                    </div>
                ))}
            </div>}
            {(category_id !== "") ? <Container>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>QR Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><QRCode title="SKU" value={`http://localhost:3000/view_product/${product.SKU}`} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </Container> : <div></div>}
        </Container>
    );
}