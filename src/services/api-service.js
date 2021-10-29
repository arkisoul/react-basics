import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
});

// request => server => response
// intercept
axiosInstance.interceptors.request.use((config) => {
    console.log(config)
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config
});

axiosInstance.interceptors.response.use((res) => {
    console.log(res)
    return res
})

export default axiosInstance;