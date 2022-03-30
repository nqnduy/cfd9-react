import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Input from "../../components/Input";
import { HOME_PATH } from "../../constants/path";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const { handleLogin, user } = useContext(AuthContext);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const submitLogin = async (ev) => {
        ev.preventDefault();
        const errorObj = {};

        if (!form.username) {
            errorObj.username = "Tên đăng nhập không được bỏ trống";
        }
        if (!form.password) {
            errorObj.password = "Mật khẩu không được bỏ trống";
        }
        setErrors(errorObj);
        if (Object.keys(errorObj).length === 0) {
            const message = await handleLogin(form);
            if (message) {
                setErrorMessage(message);
            }
        }
    };

    if (user) return <Navigate to={HOME_PATH} />;

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <h1 className="main-title">ĐĂNG NHẬP </h1>
                        {errorMessage && <p>{errorMessage}</p>}
                        <form className="form">
                            <Input
                                label="Tên đăng nhập"
                                onChange={(ev) => (form.username = ev.target.value)}
                                placeholder="Tên đăng nhập của bạn"
                                error={errors.username}
                            />
                            <Input.Password
                                label="Mật khẩu"
                                onChange={(ev) => (form.password = ev.target.value)}
                                placeholder="Nhập mật khẩu"
                                error={errors.password}
                            />
                            <button className="btn main rect" onClick={submitLogin}>
                                đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
