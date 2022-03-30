import api from '../constants/api';
export const authService = {
    login(data) {
        return api.post('/login', data)
    }
}