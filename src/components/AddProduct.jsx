import React,{useState} from "react";
import { Grid,Button,TextField,Card,CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
export const AddProduct=()=>{
    const [prod,setProd]=useState("");
    const dispatch=useDispatch()
    const handleAdd=()=>{
        const type="ADD_PROD";
        const payload=prod;
        const action={type,payload};
        dispatch(action);
    }
    return(
        <Card>
            <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField onChange={(e)=>setProd(e.target.value)}  variant="outlined" fullWidth label="Enter Product Name...."/>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={handleAdd} sx={{height:55}} variant="contained" fullWidth>Add</Button>
            </Grid>
        </Grid>
        </CardContent>
        </Card>
    )
}