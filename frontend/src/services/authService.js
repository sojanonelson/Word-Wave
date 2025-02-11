
import axios from 'axios';


const API_URL = process.env.REACT_APP_BACKEND_API;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error logging in');
  }
};

export const createAccount = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password, name });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error creating account');
  }
};