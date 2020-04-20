import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,

});

// axios.interceptors.request.use(async (config) => {
//     // if (
//     //   !config.url.endsWith('login') ||
//     //   !config.url.endsWith('refresh') ||
//     //   !config.url.endsWith('signup')
//     // ) {
//     //   const userTokenExpiration = new Date(await AsyncStorage.getItem('userTokenExpiration'));
//     //   const today = new Date();
//     //   if (today > userTokenExpiration) {
//     //     // refresh the token here
//     //     const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');
//     //   } else {
//     //     const userToken = await AsyncStorage.getItem('userToken');
//     //     config.headers.Authorization = `Bearer ${userToken}`;
//     //   }
//     // }

//     const userToken = await AsyncStorage.getItem('userToken');
//     config.headers.Authorization = `Bearer ${userToken}`;
  
//     return config;
//   }, (error) => {
//     // I cand handle a request with errors here
//     return Promise.reject(error);
//   });

export default api;