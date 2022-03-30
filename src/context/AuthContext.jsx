import React, { createContext, useState } from "react";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import userService from "../services/user";

export const AuthContext = createContext();
/*
    🚨  Thêm giá trị mặc định nếu
        <AuthContext.Provider></AuthContext.Provider> không bọc <App/>
    ✨  Example:  export const AuthContext = createContext({
                    user: "abc",
                    ... })
*/

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    /* 🚨 nhận post api login từ authService,
                nếu tồn tại message => đăng nhập sai => trả về message

    */
    const handleLogin = async (data) => {
        const res = await authService.login(data);
        if (res.message) {
            return res.message;
        }

        /** 💡 - Truyền data vô localStorage (mặc định) */
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));
        const user = await userService.getInfo();
        setUser(user.data);

        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data));
    };
    const handleLogout = () => {
        setUser();
    };
    return <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>{children}</AuthContext.Provider>; //tại sao value này có 2 dấu  {{}}
};
