import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/protectedRoute'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import PageNotFound from './pages/PageNotFound'

import NewcomerDashboard from './newcomer/pages/dashboard'
import Directory from './newcomer/pages/directory'
import NewcomerQuestions from './newcomer/pages/questions'

import ResidentDashboard from './resident/pages/dashboard'
import ResidentQuestions from './resident/pages/questions'
import Events from './resident/pages/events'

import ProviderDashboard from './provider/pages/dashboard'
import Bookings from './provider/pages/bookings'
import Availability from './provider/pages/availability'

import AdminDashboard from './admin/pages/dashboard'
import Providers from './admin/pages/providers'
import Moderation from './admin/pages/moderation'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Newcomer */}
          <Route path="/newcomer" element={<ProtectedRoute allowedRoles={['newcomer']}><NewcomerDashboard /></ProtectedRoute>} />
          <Route path="/newcomer/directory" element={<ProtectedRoute allowedRoles={['newcomer']}><Directory /></ProtectedRoute>} />
          <Route path="/newcomer/questions" element={<ProtectedRoute allowedRoles={['newcomer']}><NewcomerQuestions /></ProtectedRoute>} />

          {/* Resident */}
          <Route path="/resident" element={<ProtectedRoute allowedRoles={['resident']}><ResidentDashboard /></ProtectedRoute>} />
          <Route path="/resident/questions" element={<ProtectedRoute allowedRoles={['resident']}><ResidentQuestions /></ProtectedRoute>} />
          <Route path="/resident/events" element={<ProtectedRoute allowedRoles={['resident']}><Events /></ProtectedRoute>} />

          {/* Provider */}
          <Route path="/provider" element={<ProtectedRoute allowedRoles={['provider']}><ProviderDashboard /></ProtectedRoute>} />
          <Route path="/provider/bookings" element={<ProtectedRoute allowedRoles={['provider']}><Bookings /></ProtectedRoute>} />
          <Route path="/provider/availability" element={<ProtectedRoute allowedRoles={['provider']}><Availability /></ProtectedRoute>} />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/providers" element={<ProtectedRoute allowedRoles={['admin']}><Providers /></ProtectedRoute>} />
          <Route path="/admin/moderation" element={<ProtectedRoute allowedRoles={['admin']}><Moderation /></ProtectedRoute>} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App