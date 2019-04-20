import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';


const NavBar =()=>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="title" color="inherit">
                        My Story Book

                    </Typography>

                </Toolbar>

            </AppBar>

        </div>
    )
}

export default NavBar;