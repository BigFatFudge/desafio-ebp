import {useDispatch, useSelector} from 'react-redux';
import {Navigate, Link as RouterLink} from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { HomeData } from './HomeData';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startLoginWithEmailPassword } from '../../store/auth/thunks';


export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);
  
 const dispatch = useDispatch();

 const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
 })

 const onSubmit = ( event ) => {
    event.preventDefault();

    // console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}) ); 
  }
  
  
  return ( 
    <AuthLayout title="Login">

      <form onSubmit={ onSubmit }>     
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Correo" 
            type="email" 
            placeholder='correo@google.com'
            fullWidth
            name="email"
            value={ email }
            onChange={onInputChange}
            />

          </Grid>
        
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Contraseña" 
            type="password" 
            placeholder='Contraseña'
            fullWidth
            name="password"
            value={ password }
            onChange={onInputChange}
            />

          </Grid>
      <hr />

          <Grid 
             container
             display={!!errorMessage ? '': 'none'}
             sx={{mt: 1, mb:1}}
          >
            <Grid 
              item 
              xs={12}              
            >
                <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>


          <Grid container spacing={2} sx={{ mb: 2}}>
            
            <Grid item xs={12}>           
              <Button type="submit" variant='contained' fullWidth>                                  
                Login                
              </Button>            
            </Grid>
          </Grid>
      
        <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>   
        </Grid>

      </Grid>

    </form>
   </AuthLayout>

  )
 }
