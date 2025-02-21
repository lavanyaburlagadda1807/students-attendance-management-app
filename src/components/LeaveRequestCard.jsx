import { motion } from 'framer-motion'

function LeaveRequestCard({ request, onRequestClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onRequestClick(request)}
      className="bg-white rounded-lg shadow p-4 transition-all duration-200 cursor-pointer hover:shadow-lg"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{request.studentName}</h3>
          <p className="text-gray-600">From: {request.fromDate}</p>
          <p className="text-gray-600">To: {request.toDate}</p>
          <p className="text-gray-700 mt-2">{request.reason}</p>
        </div>
        <div className="space-y-2">
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
            request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            request.status === 'approved' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {request.status}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default LeaveRequestCard
