// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to inject the token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });




import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to inject the token, except for login/register
api.interceptors.request.use((config) => {
  // Only attach token if not hitting login or register endpoints
  if (
    !config.url.endsWith("login/") &&
    !config.url.endsWith("register/")
  ) {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});













// Register user with email and password
export const registerUser = async (email, password) => {
  try {
    const response = await api.post("register/", { email, password });
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Registration failed" };
  }
};

// Login user with email and password
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("login/", { email, password });
    // Store tokens in localStorage upon successful login
    if (response.data.access_token) {
      localStorage.setItem("access", response.data.access_token);
      localStorage.setItem("refresh", response.data.refresh_token);
    }
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Invalid credentials" };
  }
};
console.log(loginUser);

// Logout user (blacklist refresh token)
export const logoutUser = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh");
    const response = await api.post("logout/", { refresh_token: refreshToken });
    // Clear tokens on successful logout
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Logout failed" };
  }
};