import React, { createContext, useEffect, useState } from "react";
import { USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import userService from "../services/user";
import { clearToken, getToken, setToken } from "../ultis/token";

/** -NOTE-  Adding the default value if el <AuthContext.Provider> don't wrap el <App/>
 *  Example : export const AuthContext = createContext({user: "abc"}) */
export const AuthContext = createContext();

/** -EXPLAIN-  Keeping the data when page re-render */
let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
    _user = JSON.parse(_user);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(_user);

    useEffect(async () => {
        const token = getToken();
        if (token) {
            const user = await userService.getInfo();
            if (user.data) {
                setUser(user.data);
            }
        }
    }, []);

    useEffect(() => {
        if (user) {
            /**  (💡)  - [Logged in] - Has user's info */
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        } else {
            /**  (💡)  - [Logged out] - User info = undefined */
            localStorage.removeItem(USER_STORAGE_KEY);
            clearToken();
        }
    }, [user]);
    const handleLogin = async (data) => {
        const res = await authService.login(data);
        if (res.message) {
            return res.message;
        }

        /**  (💡)  - [Default] - Adding data api into localStorage */
        setToken(res.data);

        const user = await userService.getInfo();
        setUser(user.data);
    };

    const handleLogout = () => {
        setUser();
    };

    /** -IMPORTANT-  MUST using curly braces {} ->  if passing more than 1 value (obj)
     *  Passing the ["value"] attribute similar to ["style", obj] attribute! */
    return <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
};
