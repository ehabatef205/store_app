import {React, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {MdDoneOutline} from "react-icons/md"
import updateProduct from "../api/basis/updateProduct"
import { FaSpinner } from 'react-icons/fa';
import "./style.css"
import "./table.css"

export default function TrTable(props) {
    const [name, setName] = useState(props.name)
    const [quantity, setQuantity] = useState(props.quantity)
    const [SKU, setSKU] = useState(props.SKU)
    const [price, setPrice] = useState(props.price)
    const [loading, setLoading] = useState(false)

    const update = async() => {
        setLoading(true)
        updateProduct(props.id, name, props.category_id, quantity, SKU, price).then(res => {
            setLoading(false)
            console.log(res.data)
        })
    }
    return (
        <tr>
            <td>{props.index}</td>
            <td><input value={name} type="text" onChange={(e) => {setName(e.target.value)}}/></td>
            <td><input value={quantity} type="number" onChange={(e) => {setQuantity(e.target.value)}}/></td>
            <td><input value={SKU} type="text" onChange={(e) => {setSKU(e.target.value)}}/></td>
            <td><input value={price} type="number" onChange={(e) => {setPrice(e.target.value)}}/></td>
            <td>{loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "25px"}}/> : <MdDoneOutline style={{fontSize: "25px", cursor: "pointer"}} onClick={() => {update()}}/>}</td>
        </tr>
    );
}
