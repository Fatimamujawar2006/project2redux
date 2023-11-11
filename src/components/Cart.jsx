import React, { useEffect, useState } from 'react';
import { CardContent, Grid,Card,Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = () => {
    const [data,setData]=useState([])
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cartdata=useSelector((state)=>state.pcardReducer.cart)
    const handleClick=(item)=>{
        const type="P_DETAIL";
        const payload=item;
        const action={type,payload};
        dispatch(action);
        navigate("/de")
    };
    const handleDelete=(index,item)=>{
        const result=data.filter((i)=>i !==index ); 
        setData(result)
    }
    useEffect(()=>{
        setData(cartdata)
    },[])
    return (
    <Grid container spacing={2}>
        {
            data.map((item,index)=>
            <Grid item xs={12}>
                <Card sx={{bgcolor:"#cee0fa",border:"2px solid #84a1c4",padding:2,boxShadow:"9px 9px 9px #607b9b"}}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <img onClick={()=>handleClick(item)} src={item.image} alt="" width={200}  height={200}/>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Rs.{item.price}</h2>
                                <p>{item.title.slice(0,30)}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <p>{item.description}</p>
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={()=>handleDelete(item,index)} startIcon={<DeleteForeverIcon />} sx={{marginTop:7}}  variant='contained' fullWidth color='error'>Delete</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </Grid>
            )
        }
    </Grid>
    );
};

export default Cart;