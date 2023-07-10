import {React, useEffect, useRef, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import {MdOutlineAddBox} from "react-icons/md"
import getCategories from "../api/basis/getCategories"
import getProducts from "../api/basis/getProducts"
import addCategory from "../api/basis/addCategory";
import addProduct from "../api/basis/addProduct"
import { FaSpinner } from 'react-icons/fa';
import "./style.css"
import "./table.css"

export default function AddCategory() {
    const [categories, setCategories]=useState([])
    const [loading,setLoading]=useState(true)
    const [loading2,setLoading2]=useState(false)
    const [loading3,setLoading3]=useState(false)
    const [isView,setView]=useState(false)
    const [isViewProduct,setViewProduct]=useState(false)
    const [category_id, setCategoryId] = useState("")
    const [products, setProducts] = useState([])
    const nameRef = useRef(null); 
    const productNameRef = useRef(null);
    const productQuantityRef = useRef(null); 
    const productSKURef = useRef(null); 
    const productPriceRef = useRef(null);

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
        if(isView){
            setView(false)
        }
        setProducts([])
        getProducts(id).then(res =>{
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const viewAdd = () => {
        setCategoryId("")
        setView(true)
    }

    const AddCategory2 = async(id) => {
        setLoading2(true)
        addCategory(nameRef.current.value).then(res => {
            setLoading2(false)
            setCategoryId("")
            setView(false)
            window.location.reload(false)
        })
    }

    const viewAddProudect = () => {
        setViewProduct(!isViewProduct)
        console.log(isViewProduct)
    }

    const addProduct2 = async() => {
        setLoading3(true)
        addProduct(productNameRef.current.value, category_id, productQuantityRef.current.value, productSKURef.current.value, productPriceRef.current.value).then(res => {
            getProductsByCategoryId(category_id)
            setViewProduct(false)
            setLoading3(false)
        })
    }

    return (
        <Container className="d-flex justify-content-evenly nav2 w-100">
            <div style={{marginRight: "20px", marginTop: "10px", alignItems: "center", display: "flex", cursor: "pointer", justifyContent: "end"}} onClick={() => {viewAdd()}}><MdOutlineAddBox/>Add Category</div>
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <div className="me-auto text-dark w-100 justify-content-center" style={{textAlign: "center"}}>
                {categories.map((category, indexOfCategory) => (
                    <div className="text-dark " key={indexOfCategory} style={{display: "inline-flex", margin: "20px", cursor: "pointer"}}>
                        <b onClick={() => {getProductsByCategoryId(category._id)}}>{category?.name}</b>
                    </div>
                ))}
            </div>}
            {(category_id !== "") ? <Container>
                <div style={{flexDirection: "row", fontSize: "40px", display: "flex", justifyContent: "end"}}>
                    <MdOutlineAddBox style={{margin: "20px", cursor: "pointer"}} onClick={() => {viewAddProudect()}}/>
                </div>
                {isViewProduct? <div className="" style={{flexDirection: "column", width: "95vw", justifyContent: "center", alignItems: "center", display:"flex", padding: "10px"}}>
                <h1>Add product</h1>
                <input
                    ref={productNameRef}
                    style={inputText}
                    placeholder="Name of product"
                    type="text"
                />
                <input
                    ref={productQuantityRef}
                    style={inputText}
                    placeholder="Quantity of product"
                    type="number"
                />
                <input
                    ref={productSKURef}
                    style={inputText}
                    placeholder="SKU of product"
                    type="text"
                />
                <input
                    ref={productPriceRef}
                    style={inputText}
                    placeholder="Price of product"
                    type="number"
                />
                {!loading3 && <button onClick={addProduct2} style={loginButton}>
                    Add product
                </button>}
                {loading3 && <button style={loginButton2} disabled>
                    Add product...
                </button>}
            </div> : <div></div>}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>SKU</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.SKU}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </Container> : <div>{isView? <div className="" style={{flexDirection: "column", width: "100vw", justifyContent: "center", alignItems: "center", display:"flex"}}>
                <h1>Add category</h1>
                <input
                    ref={nameRef}
                    style={inputText}
                    placeholder="Name of category"
                    type="text"
                />
                {!loading2 && <button onClick={AddCategory2} style={loginButton}>
                    Add category
                </button>}
                {loading2 && <button style={loginButton2} disabled>
                    Add category...
                </button>}
            </div> : <div></div>
            }</div>}
        </Container>
    );
}

const inputText = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "50%",
    padding: "10px",
    marginTop: "20px"
}

const loginButton = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(80, 192, 169)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}

const loginButton2 = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(80, 192, 169)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}