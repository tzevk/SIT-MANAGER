import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Discipline from './pages/Discipline'
import Inquiry from './pages/Inquiry'
import AddInquiry from './pages/AddInquiry'
import './styles/base/global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/add-inquiry" element={<AddInquiry />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
