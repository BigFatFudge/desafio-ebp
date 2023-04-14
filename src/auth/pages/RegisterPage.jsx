import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  
  
  return (
   
    <AuthLayout title="Crear cuenta">

      <form>
       
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="User" 
            type="text" 
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
            
              <Button variant='contained' fullWidth>
                Login
              </Button>
            
            </Grid>

          </Grid>         
            
            <Grid container direction='row' justifyContent='end'>
            
             <Typography sx={{ mr: 1}}>Ya tengo una cuenta:</Typography>
            
              <Link color='inherit' to="/desafiopage">
                Ingresar                
              </Link>
            
            </Grid>

        </Grid>

      </form>
      </AuthLayout>

  )
}

