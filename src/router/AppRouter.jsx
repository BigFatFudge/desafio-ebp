
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { DesafioRoutes } from '../desafio/routes/DesafioRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {


  const status = useCheckAuth();
  
  
  if (status === 'checking') {
      return <CheckingAuth />
    }


  return (
    <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <DesafioRoutes />} />
          : <Route path="/auth/*" element={ <AuthRoutes />} />
        }

        <Route path='/*' element={<Navigate to='auth/login' />} />

        {/* Login y Registro */}
        

        {/* Desafio app, donde va a estar el cuerpo de la app para que el usuario trabaje */}
        
    
    </Routes>
  )
}
