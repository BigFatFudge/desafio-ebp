import React from 'react'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { DesafioRoutes } from '../desafio/routes/DesafioRoutes'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes />} />

        {/* Desafio app, donde va a estar el cuerpo de la app para que el usuario trabaje */}
        <Route path="/*" element={ <DesafioRoutes />} />

    </Routes>
  )
}
