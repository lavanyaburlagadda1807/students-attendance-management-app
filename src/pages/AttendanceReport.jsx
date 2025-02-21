import { motion } from 'framer-motion'
import { useState } from 'react'

function AttendanceReport() {
  const [sortOrder, setSortOrder] = useState('desc')
  
  // Mock attendance data
  const initialData = [
    { date: '2023-12-01', present: 45, absent: 5, leave: 2 },
    { date: '2023-12-02', present: 48, absent: 3, leave: 1 },
    { date: '2023-12-03', present: 46, absent: 4, leave: 2 },
  ]

  // Calculate and sort attendance data
  const attendanceData = initialData
    .map(day => ({
      ...day,
      percentage: ((day.present / (day.present + day.absent + day.leave)) * 100).toFixed(1)
    }))
    .sort((a, b) => {
      const comparison = parseFloat(b.percentage) - parseFloat(a.percentage)
      return sortOrder === 'asc' ? -comparison : comparison
    })

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold">Attendance Report</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer group flex items-center gap-2"
                onClick={toggleSort}
              >
                Attendance %
                <motion.span
                  animate={{ rotate: sortOrder === 'asc' ? 0 : 180 }}
                  className="inline-block transition-transform"
                >
                  ↑
                </motion.span>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-[10px] bg-gray-200 px-2 py-1 rounded hidden group-hover:inline-block"
                >
                  Click to {sortOrder === 'asc' ? 'descend' : 'ascend'}
                </motion.div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceData.map((day, index) => (
              <motion.tr
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">{day.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">{day.present}</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">{day.absent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-yellow-600">{day.leave}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${day.percentage}%` }}
                      ></div>
                    </div>
                    <span>{day.percentage}%</span>
                  </motion.div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default AttendanceReport
