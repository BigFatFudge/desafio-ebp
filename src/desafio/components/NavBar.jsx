
import React from 'react'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = () => {

    const dispatch = useDispatch()

    const {displayName} = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(startLogout());
        
    }


  return (

    <AppBar
        position='fixed'
      
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
                
                <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
                <Typography variant='h6' noWrap component='div'>Desafio App</Typography> 

            <IconButton 
                color='error'
                onClick={onLogout}
            >
                    <LogoutOutlined to='/login/'/>
            </IconButton>

            </Grid>

        </Toolbar>


    </AppBar>



  )
}
