import React, { useEffect, useState } from "react";
import { Grid,Card,CardContent,Button,Rating } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
export const ProductList=()=>{
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const dispatch=useDispatch()

    const getApi=async ()=>{
        const result=await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
    }
    const handleaddCart=(item)=>{
        const type="ADD_CART";
        const payload=item;
        const action={type,payload}
        dispatch(action)
    }
    const handleDetail=(item)=>{
        const type="P_DETAIL";
        const payload=item;
        const action={type,payload}
        dispatch(action)
        navigate("/de");
    };

    
     
    useEffect(()=>{
        getApi();
    },[])
    return(
        <Grid container spacing={2}>
                        {
                            data.map((item)=>
                    <Grid item xs={4}>
                        <Card  align="center" sx={{bgcolor:"lightgrey",border:"3px solid black",boxShadow:"5px 5px 5px",width:"400px",marginLeft:5,marginTop:2}}>
                        <CardContent>
                            <img onClick={()=>handleDetail(item)} src={item.image} alt="" width={200} height={200}/>
                        <h4>{item.title.slice(0,20)+'....'}</h4>
                        <Rating value={item.rating.rate}/>
                        <span>({item.rating.count})</span>
                        <Button onClick={()=>handleaddCart(item)} startIcon={<ShoppingCartIcon />} variant="contained" fullWidth>Add to Cart</Button>
                        <br/>
                        <br/>
                        <Button color="warning" startIcon={<BoltIcon />} variant="contained" fullWidth>Buy</Button>
                        <h3>{item.price}</h3>
                        <h5>{item.category}</h5>
                        <p>{item.description}</p>
            </CardContent>
        </Card>
                    </Grid>
                            )
                        }
                        
                </Grid>
    )
}