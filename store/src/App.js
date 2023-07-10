import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ViewCategories from "./pages/ViewCategories";
import AddCategory from "./pages/AddCategory";
import DeleteCategory from "./pages/DeleteCategory";
import UpdateCategory from "./pages/UpdateCategory";
import ViewProducts from "./pages/ViewProducts";
import ViewProduct from "./pages/ViewPRoduct";

 function App() {
   return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/view_categories" element={<ViewCategories/>}/>
            <Route path="/add_category" element={<AddCategory />}/>
            <Route path="/delete_category" element={<DeleteCategory />}/>
            <Route path="/update_category" element={<UpdateCategory />}/>
            <Route path="/view_products/" element={<ViewProducts />}/>
            <Route path="/view_product/:SKU" element={<ViewProduct />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 

