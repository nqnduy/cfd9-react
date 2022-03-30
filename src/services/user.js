import api from "../constants/api"

export const userService = {
    getInfo() {
        return api.get('/user/get-info')
    }
}
export default userService