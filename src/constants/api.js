import axios from "axios";
import { TOKEN_STORAGE_KEY } from "./key";

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.response.use((res) => {
    return res.data
}, (error) => { return error.response.data })
/** -WARNING-  #ERROR403: Handling the return error to get the message containing the error */

api.interceptors.request.use((config) => {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        token = JSON.parse(token)
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config
})
export default api