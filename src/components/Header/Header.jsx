import React from 'react';

//Autocomplete from google map suggestions
import { Autocomplete } from '@react-google-maps/api';

//AppBar basically a bar with buttons
//AppBar component uses display: flex and flex-direction: column, that means direct descendants are stacked on top of each other.
//On the other hand Toolbar uses display: flex too, but doesn't set flex-direction
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

import useStyles from './styles.js';

//search icon for autocomplete serach
import SearchIcon from '@material-ui/icons/Search';

//Typography every single text element, change variant headings subtitles or titles
//Box = a div that allows you to set adisplay of flex and other properties
//set root class to classes.inputRoot and input to classes.inputInput
const Header = () => {
    
    //useStyles a hook. calling useStyles as a function
    const classes = useStyles();

    return(
        //<h1>Header</h1>
        <AppBar position = "static">
            <Toolbar className = { classes.toolbar}>
                <Typography variant = "h5"
                    className = { classes.title }>
                    Travel
                </Typography>
                <Box display = "flex">
                    <Typography variant = "h6"
                        className = { classes.title }>
                        Explore
                    </Typography>
                    <Autocomplete>
                        <div
                            className = {classes.search}>
                                <div className = {classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder = "Search..." 
                                    classes = {{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;