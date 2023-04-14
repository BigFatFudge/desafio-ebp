import {Navigate, Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { HomeData } from '../../desafio/layout/HomeData';
// import { Link } from 'react-router-dom';

export const LoginPage = () => {
  
  
  return (
   
    <AuthLayout title="Login">

      <form>
       
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="User" 
            type="username" 
            placeholder='Nombre/Apellido'
            fullWidth
            />

          </Grid>
        
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Contraseña" 
            type="password" 
            placeholder='Contraseña'
            fullWidth
            />

          </Grid>
      <hr />
          <Grid container spacing={2} sx={{ mb: 2}}>
            
            <Grid item xs={12}>
            
              <Button >
                <Link component={RouterLink} to={"/auth/DesafioPage"}>                  
                Login
                </Link>
              </Button>
            
            </Grid>

          </Grid>
      
        <Grid container direction='row' justifyContent='end'>

            <Link component={RouterLink} color='inherit' to="/auth/login">
              Crear una cuenta
            </Link>
        
        </Grid>

        </Grid>

      </form>
      </AuthLayout>

  )//     type="submit" className="btn btn-primary" onClick={onSubmit} >
}
// variant='contained' fullWidth type="submit" onClick={onSubmit}