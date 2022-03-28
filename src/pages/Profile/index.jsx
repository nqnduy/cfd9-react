import React, { useState } from "react";
import Information from "./Information";
import Course from "./Course";
import Project from "./Project";
import Payment from "../Payment";
import Coin from "../Coin";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function Profile({ path }) {
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span className="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink to={`${path}`} end>
                                Thông tin tài khoản
                            </NavLink>
                            <NavLink to={`${path}/khoa-hoc`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
                            <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
