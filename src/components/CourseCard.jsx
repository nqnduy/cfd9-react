import React from "react";
import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH } from "../constants/path";

function CourseCard({ thumbnail, title, short_description, teacher, course_status, slug, id }) {
    const detailPath = generatePath(COURSE_DETAIL_PATH, { slug, id });
    const registerPath = generatePath(COURSE_REGISTER_PATH, { id });

    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={detailPath}>
                    <img src={thumbnail.link} alt="" />
                    <span className="badge b1">
                        {course_status === "dang-dien-ra" && "Đang diễn ra"}
                        {course_status === "da-ket-thuc" && "Đã kết thúc"}
                        {course_status === "sap-khai-gian" && "Sắp khai giảng"}
                    </span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12
                            </div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <Link className="info" to={detailPath}>
                    <a className="name" href="#">
                        {title}
                    </a>
                    <p className="des">{short_description}</p>
                </Link>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link className="register-btn" to={registerPath}>
                        Đăng Ký
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
