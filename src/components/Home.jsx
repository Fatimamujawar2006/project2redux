import React from 'react';
import { Button,Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch=useDispatch();
    const handleCat=(cat)=>{
        const type="ADD_CAT";
        const payload=cat;
        const action={type,payload};
        dispatch(action);
    }
    return (
        <div>
            <h1>Home</h1>
            <Grid container spacing={2}>
                <Grid item xs={2}>
            <Button fullWidth variant='contained' color='success' onClick={()=>handleCat("Electronic")}>Electronic</Button>
            <br />
            <br />
            <Button fullWidth variant='contained' color='secondary' onClick={()=>handleCat("Kids")} >Kids</Button>
            </Grid>
            </Grid>
        </div>
    );
};

export default Home;