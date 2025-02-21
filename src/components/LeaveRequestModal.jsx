import { motion, AnimatePresence } from 'framer-motion';

const LeaveRequestModal = ({ isOpen, onClose, request, onAction }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold mb-4">Leave Request Details</h3>
          
          <div className="space-y-3 mb-6">
            <div>
              <span className="text-gray-600">Student:</span>
              <span className="ml-2 font-medium">{request.studentName}</span>
            </div>
            <div>
              <span className="text-gray-600">Duration:</span>
              <span className="ml-2 font-medium">{request.fromDate} to {request.toDate}</span>
            </div>
            <div>
              <span className="text-gray-600">Reason:</span>
              <p className="mt-1 text-gray-800">{request.reason}</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
              onClick={() => onAction('rejected')}
            >
              Reject
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              onClick={() => onAction('approved')}
            >
              Approve
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeaveRequestModal;
