import React from 'react';
import GoogleMapReact from 'google-map-react';
//Paper is div with background color. useMediaQuery- makes map more mobile responsive
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
//location outline icon
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Rating from '@material-ui/lab';
//get styles
import useStyles from './styles';


const Map = () => {

    //call it hook
    const classes = useStyles();
    //isMobile = false if width of device is > 600pixels
    const isMobile = useMediaQuery('(min-width:600px)');

    //coordinates for map
    const coord = { lat: 0, lng: 0};

    //onChange when map is changed
    //Onchildclick when a place is clicked
    //bootstrap key. Google Cloud Platform. Javascript Map API
    return(
        <div
            classname = {classes.MapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys = {{ key: 'AIzaSyCE7W5smgPz-kEdjr6lk9n3SDjW6IdORyU'}}
                    defaultCenter = {coord}
                    center = {coord}
                    defaultZoom = {13}
                    margin = {[50, 50, 50, 50]}
                    options= {''}
                    onChange ={''}
                    onChildClick ={''}
                >

                </GoogleMapReact>
            </div>
    );
};

export default Map;