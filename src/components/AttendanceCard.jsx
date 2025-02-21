import { motion } from 'framer-motion'

function AttendanceCard({ student }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800'
      case 'absent':
        return 'bg-red-100 text-red-800'
      case 'leave':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow p-4 transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{student.name}</h3>
          <p className="text-gray-600">Roll No: {student.rollNo}</p>
        </div>
        <span className={`px-3 py-1 rounded-full capitalize ${getStatusColor(student.status)}`}>
          {student.status}
        </span>
      </div>
    </motion.div>
  )
}

export default AttendanceCard
