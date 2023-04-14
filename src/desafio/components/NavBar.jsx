
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'

export const NavBar = () => {
  return (

    <AppBar
        position='fixed'
        // sx={{ 
        //     width: {sm: `calc(100% - ${drawerWidth}px)`},
        //     ml: { sm: `${drawerWidth}px`}
        // }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{mr: 2, display: { sm: 'none' }}}         
            >

                <MenuOutlined />

            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                <Typography variant='h6' noWrap component='div'>DesafioApp</Typography>

            <IconButton color='error'>
                <LogoutOutlined to='/login/'/>
            </IconButton>

            </Grid>

        </Toolbar>


    </AppBar>



  )
}
