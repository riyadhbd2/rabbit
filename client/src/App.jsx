import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Layout/AdminLayout'

const App = () => {
  return (
   <Routes>
    {/* user layout route */}
    <Route path="/" element={<UserLayout/>}/>
    {/* admin layout route */}
    <Route path="/admin" element={<AdminLayout/>}/>
    <Route />
   </Routes>
  )
}

export default App