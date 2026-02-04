import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './components/layout/SideBar/SideBar'
import Overview from './components/Pages/Overview'
import Goals from './components/Pages/Goals'
import Settings from './components/Pages/Settings'
import Transactions from './components/Pages/Transations'

function App() { 
  return (
    <>
      <SideBar />

      {/* Pages Routes */}
      <Routes>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/goals" element={<Goals />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  )
}

export default App
