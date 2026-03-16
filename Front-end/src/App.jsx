import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AuthLayout from './components/layout/AuthLayout'
import { initFakeDB } from './services/fakeUserDB'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

import ProtectedRoute from './routes/ProtectedRoute'

import Goals from './components/Pages/Goals/Goals'
import Settings from './components/Pages/Settings'
import Transactions from './components/Pages/Transactions/Transactions'
import Dashboard from './components/Pages/Dashboard/Dashboard'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import Home from './components/Pages/Home'
import Categories from './components/Pages/Categories/Categories'
import Subscriptions from './components/Pages/Subscriptions/Subscriptions'

import { useEffect } from 'react'

import './App.css'

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
              <Route path="/abbonamenti" element={<Subscriptions />} />
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
