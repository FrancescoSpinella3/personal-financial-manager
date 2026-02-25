import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AuthLayout from './components/layout/AuthLayout'
import { initFakeDB } from './services/fakeUserDB'
import { AuthProvider } from './context/AuthContext'

import ProtectedRoute from './components/routes/ProtectedRoute'

import Goals from './components/Pages/Goals/Goals'
import Settings from './components/Pages/Settings'
import Transactions from './components/Pages/Transations'
import Dashboard from './components/Pages/Dashboard'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import Home from './components/Pages/Home'
import Categories from './components/Pages/Categories/Categories'

import { useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/ThemeContext'

function App() { 
  useEffect(() => {
    initFakeDB(); // create test user if not exist
  }, []);

  return (
    <ThemeProvider>
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
            <Route element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transazioni" element={<Transactions />} />
              <Route path="/obiettivi" element={<Goals />} />
              <Route path="/categorie" element={<Categories />} />
              <Route path="/impostazioni" element={<Settings />} />
            </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>

  )
}

export default App
