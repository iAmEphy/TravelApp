//npm install @material-ui @react-google-maps/api axios google-map-react

import React from 'react';
//cssbaseline normalizes the styles. 
import { CssBaseline, Grid } from '@material-ui/core';

//Import all components
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';



//functional app component
const App = () => {

    //width is inline styling. object double curly braces
    //GRID CONTAINER. handles different screen sizes and orientations
    return (
        <>
            <CssBaseline />
                <Header />
                <Grid 
                    container spacing={3}
                    style = {{ width: '100%'}}>
                        <Grid
                            item xs = {12} md = {4}>
                                <List/>
                        </Grid>
                        <Grid
                            item xs = {12} md = {8}>
                                <Map />
                        </Grid>

                </Grid>
        </>
    );
};

export default App;