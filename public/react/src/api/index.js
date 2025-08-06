import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor to include CSRF token if needed
api.interceptors.request.use(
  (config) => {
    // Add CSRF token for Frappe
    const csrfToken = window.csrf_token || getCookie('csrf_token')
    if (csrfToken) {
      config.headers['X-Frappe-CSRF-Token'] = csrfToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access - redirecting to login')
      // window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Helper function to get cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

// API methods for Custom Project
export const customProjectAPI = {
  // Get dashboard data
  getDashboardData: () => api.get('/method/custom_project.api.get_dashboard_data'),
  
  // Get all projects
  getProjects: () => api.get('/method/custom_project.api.get_projects'),
  
  // Create new project
  createProject: (data) => api.post('/method/custom_project.api.create_project', data),
  
  // Update project
  updateProject: (id, data) => api.put(`/method/custom_project.api.update_project`, { id, ...data }),
  
  // Delete project
  deleteProject: (id) => api.delete(`/method/custom_project.api.delete_project`, { data: { id } }),
  
  // Get users
  getUsers: () => api.get('/method/custom_project.api.get_users'),
  
  // Create user
  createUser: (data) => api.post('/method/custom_project.api.create_user', data),
}

export default api
