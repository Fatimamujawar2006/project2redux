import React from "react";
import Home from "./Home";
import { Nav } from "./Nav";
import { AddProduct } from "./AddProduct";
import { Product } from "./Product";
import { ProductList } from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav />
        <br />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add"  element={<AddProduct />}/>
            <Route path="/product" element={<Product />} />
            <Route path="/proList" element={<ProductList />} />
            <Route path="/de" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
    )
}