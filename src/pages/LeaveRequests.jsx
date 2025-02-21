import { motion } from 'framer-motion'
import { useState } from 'react'
import LeaveRequestCard from '../components/LeaveRequestCard'
import LeaveRequestModal from '../components/LeaveRequestModal'

function LeaveRequests() {
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      studentName: "John Doe",
      fromDate: "2023-12-20",
      toDate: "2023-12-22",
      reason: "Family function",
      status: "pending"
    },
    {
      id: 2,
      studentName: "Jane Smith",
      fromDate: "2023-12-25",
      toDate: "2023-12-26",
      reason: "Medical appointment",
      status: "approved"
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      fromDate: "2023-12-28",
      toDate: "2023-12-29",
      reason: "Personal reasons",
      status: "rejected"
    }
  ])

  const handleRequestClick = (request) => {
    if (request.status === 'pending') {
      setSelectedRequest(request)
    }
  }

  const handleRequestAction = (status) => {
    setLeaveRequests(requests =>
      requests.map(request =>
        request.id === selectedRequest.id
          ? { ...request, status }
          : request
      )
    )
    setSelectedRequest(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold">Leave Requests</h1>
      <div className="space-y-4">
        {leaveRequests.map(request => (
          <LeaveRequestCard 
            key={request.id} 
            request={request}
            onRequestClick={handleRequestClick}
          />
        ))}
      </div>

      <LeaveRequestModal
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        request={selectedRequest}
        onAction={handleRequestAction}
      />
    </motion.div>
  )
}

export default LeaveRequests
