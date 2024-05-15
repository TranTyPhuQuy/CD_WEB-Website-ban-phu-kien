import axios from 'axios';

const jwt = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTU1OTgyMjEsImV4cCI6MTcxNjQ0NDIyMSwiZW1haWwiOiJsb2NAZ21haWwuY29tIn0.AsUbY566GslYrFLEMdGUjww2eOSdrzk2JyKiETntPTtO5F-c7zmpraLrD8j4vpN98EbEwXjmCiIq3sxMt7SRNQ';
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    "Authorization": `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { config, status, data } = error.response;
    const URLS = ['/auth/local/register', '/auth/local'];
    if (URLS.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList.length > 0 ? messageList[0] : {};
      throw new Error(firstMessage.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

