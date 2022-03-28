import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    const close = () => {
        document.body.classList.toggle("menu-is-show");
    };
    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <NavLink to="/dang-nhap" onClick={close}>
                            Đăng ký/ Đăng nhập
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={close}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/doi-ngu" onClick={close}>
                            CFD Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/khoa-hoc" onClick={close}>
                            Khoá học
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/du-an" onClick={close}>
                            Dự án
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lien-he" onClick={close}>
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div class="overlay_nav" onClick={close}></div>
        </>
    );
}
