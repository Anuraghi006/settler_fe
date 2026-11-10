import axiosInstance from './axiosInstance'

// Generic request helper
// Usage: axiosService('get', '/api/books')
//        axiosService('post', '/api/addBook', formData, { 'Content-Type': 'multipart/form-data' })
const axiosService = async (method, url, body, headers) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
      headers,
    })
    return response
  } catch (error) {
    console.error(`${method.toUpperCase()} ${url} failed:`, error.response?.data || error.message)
    throw error
  }
}

export default axiosService