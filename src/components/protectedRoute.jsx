import { Navigate } from 'react-router-dom'
import { dashboardPath, getStoredUser, hasToken } from '../services/authService'

// Usage: <ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>
function ProtectedRoute({ allowedRoles, children }) {
  // Not signed in: send to login
  if (!hasToken()) {
    return <Navigate to="/login" replace />
  }

  const user = getStoredUser()

  // Signed in but the wrong role: send to their own dashboard
  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    return <Navigate to={dashboardPath(user?.role)} replace />
  }

  return children
}

export default ProtectedRoute