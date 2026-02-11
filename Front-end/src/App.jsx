import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AuthLayout from './components/layout/AuthLayout'
import { initFakeDB } from './services/fakeUserDB'
import { AuthProvider } from './context/AuthContext'

import ProtectedRoute from './components/routes/ProtectedRoute'

import Goals from './components/Pages/Goals'
import Settings from './components/Pages/Settings'
import Transactions from './components/Pages/Transations'
import Dashboard from './components/Pages/Dashboard'
import UserProfile from './components/Pages/UserProfile'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import Home from './components/Pages/Home'
import Categories from './components/Pages/Categories'

import { useEffect } from 'react'

import './App.css'

function App() { 
  useEffect(() => {
    initFakeDB(); // create test user if not exist
  }, []);

  return (
    <AuthProvider>
      {/* Pages Routes */}
        <Routes>
          {/* Home, Login and register pages */}
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
          </Route>

          {/* Dashboard area */}
          {/* <Route element={<DashboardLayout />}> */}
          <Route element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<UserProfile /> } />
          </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
