import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DesafioPage } from '../pages/DesafioPage'

export const DesafioRoutes = () => {
 
    return (
    
        <Routes>

            <Route path="/" element={ <DesafioPage />} />

            <Route path="/*" element={ <Navigate to="/" />} />

        </Routes>

  )
}
