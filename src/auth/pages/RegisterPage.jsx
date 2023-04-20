import { useMemo, useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
  
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
 
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener mas de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.' ]

}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setformSubmitted] = useState(false);
  
  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm(formData, formValidations);
  
   console.log(displayNameValid)

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
   
    <AuthLayout title="Crear cuenta">
      
      <form onSubmit={onSubmit}>
       
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
            label="Nombre Completo"
            type="text"
            placeholder='Nombre completo'
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={ !!displayNameValid && formSubmitted}
            helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="E-mail" 
            type="text" 
            placeholder='correo'
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
            />

          </Grid>
        
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Contraseña" 
            type="password" 
            placeholder='Contraseña'
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            />

          </Grid>
      <hr />
          <Grid container spacing={2} sx={{ mb: 2}}>
            
            <Grid 
              item 
              xs={12}
              display={!!errorMessage ? '': 'none'}
              >
                <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
           
            <Grid item xs={12}>            
              <Button 
              disabled={isCheckingAuthentication}
              type="submit"            
              variant='contained'                
              fullWidth
              >
                Crear Cuenta
              </Button>
            
           </Grid>

          </Grid>         
            
            <Grid container direction='row' justifyContent='end'>
            
             <Typography sx={{ mr: 1}}>Ya tengo una cuenta:</Typography>
            <Button>
              <Link  component={RouterLink} color='inherit' to="/auth/homedata">
                Ingresar                
              </Link>
            </Button>
            </Grid>

        </Grid>

      </form>
      </AuthLayout>

  )
}

