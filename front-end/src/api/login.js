import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postLogin = async (newLogin) => {
  try {
    const response = await API.post('/login', newLogin);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default postLogin;
