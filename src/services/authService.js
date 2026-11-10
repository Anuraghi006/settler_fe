import axiosInstance from '../api/axiosInstance'

// Endpoint calls
export const registerAPI = (body) => axiosInstance.post('/api/register', body)
export const loginAPI = (body) => axiosInstance.post('/api/login', body)
export const googleLoginAPI = (body) => axiosInstance.post('/api/auth/google', body)

// Session helpers
// The server responds with { token, user }
export const saveSession = ({ token, user }) => {
  sessionStorage.setItem('userToken', token)
  sessionStorage.setItem('userData', JSON.stringify(user))
}

export const clearSession = () => {
  sessionStorage.removeItem('userToken')
  sessionStorage.removeItem('userData')
}

export const getStoredUser = () => {
  try {
    return JSON.parse(sessionStorage.getItem('userData')) || null
  } catch {
    return null
  }
}

export const hasToken = () => Boolean(sessionStorage.getItem('userToken'))

// Each role has its own dashboard at /<role>
export const dashboardPath = (role) => `/${role || 'newcomer'}`