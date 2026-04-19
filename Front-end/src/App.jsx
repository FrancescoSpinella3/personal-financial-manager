import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AuthLayout from './components/layout/AuthLayout'
import { initFakeDB } from './services/fakeUserDB'
import { AuthProvider } from './context/AuthContext'

import ProtectedRoute from './routes/ProtectedRoute'

import Goals from './components/pages/Goals/Goals'
import Settings from './components/pages/Settings'
import Transactions from './components/pages/Transactions/Transactions'
import Overview from './components/pages/Dashboard/Overview'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Home from './components/pages/Home'
import Categories from './components/pages/Categories/Categories'
import Subscriptions from './components/pages/Subscriptions/Subscriptions'

import { useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/ThemeProvider'


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
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Home />} />
            </Route>

            {/* Dashboard area */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="panoramica" element={<Overview />} />
              <Route path="transazioni" element={<Transactions />} />
              <Route path="abbonamenti" element={<Subscriptions />} />
              <Route path="obiettivi" element={<Goals />} />
              <Route path="categorie" element={<Categories />} />
              <Route path="impostazioni" element={<Settings />} />
            </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
