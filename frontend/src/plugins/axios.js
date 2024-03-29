import axios from 'axios';

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

console.log(import.meta.env.VITE_APP_API_BASE_URL);
console.log('Axios baseURL:', axiosIns.defaults.baseURL);

// Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use(config => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('accessToken');

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};

    // Set authorization header
    // JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : '';
  }

  // Return modified config
  return config;
});

export default axiosIns;
