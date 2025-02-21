import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import AttendanceCard from '../components/AttendanceCard'
import { motion } from 'framer-motion'

function Dashboard() {
  const [date, setDate] = useState(new Date())

  // Mock student data
  const students = [
    { id: 1, name: "John Doe", rollNo: "001", status: "present" },
    { id: 2, name: "Jane Smith", rollNo: "002", status: "absent" },
    { id: 3, name: "Mike Johnson", rollNo: "003", status: "leave" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-4">Today's Attendance</h2>
          <div className="space-y-4">
            {students.map(student => (
              <AttendanceCard key={student.id} student={student} />
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <Calendar
            onChange={setDate}
            value={date}
            className="w-full rounded-lg"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Present:</span>
              <span className="font-semibold text-green-600">85%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Absent:</span>
              <span className="font-semibold text-red-600">10%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">On Leave:</span>
              <span className="font-semibold text-yellow-600">5%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
