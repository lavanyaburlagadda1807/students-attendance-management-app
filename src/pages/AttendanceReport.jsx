import { motion } from 'framer-motion'

function AttendanceReport() {
  // Mock attendance data
  const attendanceData = [
    { date: '2023-12-01', present: 45, absent: 5, leave: 2 },
    { date: '2023-12-02', present: 48, absent: 3, leave: 1 },
    { date: '2023-12-03', present: 46, absent: 4, leave: 2 },
  ]

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance %</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceData.map((day, index) => (
              <motion.tr
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{day.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">{day.present}</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">{day.absent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-yellow-600">{day.leave}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {((day.present / (day.present + day.absent + day.leave)) * 100).toFixed(1)}%
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
