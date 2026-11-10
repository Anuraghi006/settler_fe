import axios from 'axios'

// Backend address. Set VITE_API_URL in client/.env, or it falls back to localhost.
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

// Attach the token before every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('userToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Token expired or invalid: clear the session and send the user to login
    if (error.response?.status === 401) {
      sessionStorage.removeItem('userToken')
      sessionStorage.removeItem('userData')
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance