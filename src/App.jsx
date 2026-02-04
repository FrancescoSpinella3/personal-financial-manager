import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AuthLayout from './components/layout/AuthLayout'
import './App.css'

import Goals from './components/Pages/Goals'
import Settings from './components/Pages/Settings'
import Transactions from './components/Pages/Transations'
import Dashboard from './components/Pages/Dashboard'
import UserProfile from './components/Pages/UserProfile'
import Login from './components/Pages/Login'

function App() { 
  return (
    <>
      {/* Pages Routes */}
        <Routes>
          {/* Dashboard area */}
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
          </Route>


          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<UserProfile /> } />
          </Route>
      </Routes>
  </>
  )
}

export default App
