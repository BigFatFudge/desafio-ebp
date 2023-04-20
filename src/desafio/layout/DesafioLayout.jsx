
import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { HomeData } from '../../auth/pages/HomeData';

const drawerWidth = 240;

export const DesafioLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>

        <NavBar drawerWidth={ drawerWidth }/>

        {/* Sidebar (no lo voy a incluir) */}

        <Box
           component='main'
           sx={{ flexGrow: 1, p:3}}
        >
            {/* Toolbar */}

            {children}
            <HomeData />

           {/* <HomeData /> */}

        </Box>


    </Box>
    
  )
}
