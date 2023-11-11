import React from "react";
import { Grid,Button,Card,CardContent,Badge } from "@mui/material";
import { navdata } from "./navdata";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
export const Nav=()=>{
    const cartdata=useSelector((state)=>state.pcardReducer.cart)
    return(
        <Card sx={{bgcolor:"lightblue",boxShadow:"5px 5px 5px"}}>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        navdata.map((item)=>
                        <Grid item xs={2.7}>
                            <Link to={item.path}>
                                <Button variant="contained" fullWidth color="success">{item.title}</Button>
                            </Link>
                            </Grid>
                        )
                    }
                    <Grid item xs={1}>
                        <Link to="/cart">
                        <Badge badgeContent={cartdata && cartdata.length}>
                        <ShoppingCartIcon /> 
                        </Badge>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}