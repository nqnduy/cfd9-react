import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PATH } from "../constants/path";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const { user, handleLogout } = useContext(AuthContext);

    const toggleMenu = () => {
        document.body.classList.toggle("menu-is-show");
    };
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={toggleMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {user ? (
                        <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">{user.name}</div>
                                    <div className="avatar">
                                        <img src={user.avatar} alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger"></div>
                            <div className="sub">
                                <a href="#">Khóa học của tôi</a>
                                <a href="#">Thông tin tài khoản</a>
                                <a href="#" onClick={handleLogout}>
                                    Đăng xuất
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div class="not-login bg-none">
                            <Link to={LOGIN_PATH} class="btn-register">
                                Đăng nhập
                            </Link>
                            <a href="login.html" class="btn main btn-open-login">
                                Đăng ký
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
