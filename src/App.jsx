import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Discipline from './pages/Discipline'
import Inquiry from './pages/Inquiry'
import AddInquiry from './pages/AddInquiry'
import OnlineAdmission from './pages/OnlineAdmission'
import Admission from './pages/Admission'
import Student from './pages/Student'
import PersonalInfo from './pages/PersonalInfo'
import CorporateInquiry from './pages/CorporateInquiry'
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
        <Route path="/online-admission" element={<OnlineAdmission />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student" element={<Student />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/corporate-inquiry" element={<CorporateInquiry />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
