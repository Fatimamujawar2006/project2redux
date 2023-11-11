import React from 'react';
import { Grid,Button } from '@mui/material';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
const ProductDetails = () => {
    const navigate=useNavigate()
    const selectdata=useSelector((state)=>state.pdetailReducer.details)
    React.useEffect(()=>{
        if(selectdata.length===0)
        navigate("/proList")
    },[])

    return (
            <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <img src={selectdata.image} alt="" width={400} height={400} />
                    <Button sx={{margin:2}} startIcon={<ShoppingCartIcon />} variant='contained'>Add Cart</Button>
                    <Button sx={{margin:2,width:150}} startIcon={<BoltIcon />} variant='contained' color='warning'>Buy</Button>
                </Grid>
                <Grid item xs={7} padding={10} >
                    <h3>{selectdata.title}</h3>
                    {/* <Rating value={selectdata.rating.rate}/> */}
                    <h3>{selectdata.price}</h3>
                    <h5>{selectdata.category}</h5>
                    <p>{selectdata.description}</p>

                </Grid>
            </Grid>
    );
};

export default ProductDetails;