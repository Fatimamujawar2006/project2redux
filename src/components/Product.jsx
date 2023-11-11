import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { useSelector } from "react-redux";
export const Product=()=>{
    const selProds=useSelector((state)=>state.productReducer.filtProd)
    const [data,setData]=useState([])

    useEffect(()=>{
        setData(selProds)
    },[selProds]);
    return(
        <Card>
                <CardContent>
                <Grid container spacing={2}>
                    {
                        data.map((item)=>
                        <Grid item xs={12}>
                            <h2>{item}</h2>
                    </Grid>
                        )
                    }
        </Grid>
                </CardContent>
            </Card>
    )
}