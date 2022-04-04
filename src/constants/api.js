import axios from "axios";
import { authService } from "../services/auth";
import { getToken, setToken } from "../ultis/token";

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    /** -WARNING-  #ERROR403: Handling the return error to get the message containing the error
     * Use clg to check the specified name of error data returned */
    /** -NOTE-  - error.request.status: status of error
     *          - error.config: config of_REQUEST_(has error ~ in the api call failed) */
    if (error.request.status === 403) {
        console.log(error.config);
        let token = getToken();
        /** -NOTE-  Refresh token */
        if (token) {
            const refresh = await authService.refreshToken({
                refreshToken: token.refreshToken,
            });
            if (refresh.data) {
                token.accessToken = refresh.data.accessToken;

                setToken(token);
                return api(error.config);
            }
        }
    }
    return error.response.data;
})

api.interceptors.request.use((config) => {
    let token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config
})
export default api