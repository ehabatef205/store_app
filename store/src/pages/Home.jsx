import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {HiViewGrid} from "react-icons/hi"
import {MdOutlineAddBox} from "react-icons/md"
import {BsQrCodeScan} from "react-icons/bs"
import {GrUpdate} from "react-icons/gr"
import {MdOutlineDeleteOutline} from "react-icons/md"
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
    const navigate = useNavigate();

    return (
        <div
        className="home"
        style={home}
        >
            <div className="" style={{width: "100%", height: "100vh", flexDirection: "column", justifyContent: "center", alignItems: "center", display: "flex"}}>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", padding: "20px", cursor: "pointer"}} onClick={() => {navigate("/view_products")}}>
                    <BsQrCodeScan style={{fontSize: "calc(50px + 2vmin)"}}/>
                    <h4>View Products</h4>
                </div>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", padding: "20px", cursor: "pointer"}} onClick={() => {navigate("/view_categories")}}>
                    <HiViewGrid style={{fontSize: "calc(50px + 2vmin)"}}/>
                    <h4>View Category</h4>
                </div>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", padding: "20px", cursor: "pointer"}} onClick={() => {navigate("/add_category")}}>
                    <MdOutlineAddBox style={{fontSize: "calc(50px + 2vmin)"}}/>
                    <h4>Add Category</h4>
                </div>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", padding: "20px", cursor: "pointer"}} onClick={() => {navigate("/update_category")}}>
                    <GrUpdate style={{fontSize: "calc(50px + 2vmin)"}}/>
                    <h4>Update Category</h4>
                </div>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", padding: "20px", cursor: "pointer"}} onClick={() => {navigate("/delete_category")}}>
                    <MdOutlineDeleteOutline style={{fontSize: "calc(50px + 2vmin)"}}/>
                    <h4>Delete Category</h4>
                </div>
            </div>
        </div>
    );
}

const home = {
};
