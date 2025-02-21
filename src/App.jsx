import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import LeaveRequests from './pages/LeaveRequests'
import AttendanceReport from './pages/AttendanceReport'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leave-requests" element={<LeaveRequests />} />
          <Route path="/attendance-report" element={<AttendanceReport />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
