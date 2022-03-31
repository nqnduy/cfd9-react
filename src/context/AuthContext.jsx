import React, { createContext, useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import userService from "../services/user";

/** -NOTE-  Adding the default value if el <AuthContext.Provider> don't wrap el <App/>
 *  Example : export const AuthContext = createContext({user: "abc"}) */
export const AuthContext = createContext();

/** -EXPLAIN-  Keeping the data when page re-render - get the data in localStorage at step (✨) */
let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
    _user = JSON.parse(_user);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(_user);

    useEffect(() => {
        if (user) {
            /**  (💡)  - [Logged in] - Has user's info -> setItem user token into localStorage (✨)*/
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        } else {
            /**  (💡)  - [Logged out] - User info = undefined -> removeItem data into localStorage */
            localStorage.removeItem(USER_STORAGE_KEY);
            localStorage.removeItem(TOKEN_STORAGE_KEY);
        }
    }, [user]);
    const handleLogin = async (data) => {
        const res = await authService.login(data);
        if (res.message) {
            return res.message;
        }

        /**  (💡)  - [Default] - Has data api -> setItem data into localStorage */
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));

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
