
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { DesafioRoutes } from '../../desafio/routes/DesafioRoutes'

export const AuthRoutes = () => {
  return (
    <Routes>

        <Route path="login" element={ <LoginPage />} />

        <Route path="register" element={ <RegisterPage />} />

        <Route path="desafioroutes/*" element={ <DesafioRoutes />} />

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />

    </Routes>
  )
}
