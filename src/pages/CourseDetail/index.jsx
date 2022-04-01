import React, { useState, useEffect } from "react";
import { generatePath, Link, useNavigate, useParams } from "react-router-dom";
import CourseAccordion from "../../components/CourseAccordion";
import { COURSE_REGISTER_PATH, HOME_PATH } from "../../constants/path";
import { courseService } from "../../services/course";
import { currency } from "../../ultis/number";
import { convertDate } from "../../ultis/date";
import Teacher from "./components/Teacher";
import useQuery from "../../hooks/useQuery";
import Skeleton from "@mui/material/Skeleton";
export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const registerPath = generatePath(COURSE_REGISTER_PATH, { id });
    const { data: detail, loading } = useQuery(
        async () => {
            const res = await courseService.getDetail(id);
            if (res.data) {
                return res;
            } else {
                navigate(HOME_PATH);
            }
        },
        [],
        {}
    );
    const { teacher } = detail;

    return (
        <main className="course-detail" id="main">
            <section className="banner style2" style={{ "--background": detail.template_color_banner }}>
                <div className="container">
                    <div className="info">
                        {loading ? <Skeleton width={"100%"} height={120} /> : <h1>Thực Chiến {detail.title}</h1>}

                        {loading ? (
                            <Skeleton variant="text" width={"50%"} />
                        ) : (
                            <div className="row">
                                <div className="date">
                                    <strong>Khai giảng:</strong> {convertDate(detail.opening_time)}
                                </div>
                                <div className="time">
                                    <strong>Thời lượng:</strong> 18 buổi
                                </div>
                            </div>
                        )}

                        <Link className="btn white round" to={registerPath} style={{ "--color-btn": detail.template_color_btn }}>
                            đăng ký
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt="" />
                            </div>{" "}
                            <span>giới thiệu</span>
                        </div>
                        {loading ? <Skeleton variant="text" width={"12%"} /> : <div className="money">{currency(detail.money)} VND</div>}
                    </div>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    {loading ? <Skeleton width={"100%"} height={308} /> : <p className="des">{detail.long_description}</p>}
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src="/img/course-detail-img.png" alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {loading ? (
                        [...Array(18)].map((_, i) => (
                            <div key={i} style={{ marginBottom: 4 }}>
                                <Skeleton width={"100%"} height={92} />
                            </div>
                        ))
                    ) : (
                        <CourseAccordion.Func>
                            {detail.content?.map((e, i) => (
                                <CourseAccordion key={i} index={i + 1} {...e} />
                            ))}
                        </CourseAccordion.Func>
                    )}
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        {detail.required?.map((e) => (
                            <div className="col-md-6">{e.content}</div>
                        ))}
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        <div className="col-md-6">Học offline tại văn phòng, cùng {detail.teacher?.title} và 3 đồng nghiệp.</div>
                        <div className="col-md-6">Dạy và thực hành thêm bài tập online thông qua Skype.</div>
                        <div className="col-md-6">
                            Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook hoặc phần mềm điều khiển máy tính.
                        </div>
                        <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> {convertDate(detail.opening_time)} <br />
                        <strong>Thời gian học: </strong> {detail.schedule}
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <Teacher teacher={teacher} />
                    <h3 className="title">Người hướng dẫn</h3>
                    {detail.mentor?.map((e) => (
                        <Teacher key={e.id} teacher={e} />
                    ))}
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt="" /> {detail.number_student_default} bạn đã đăng ký
                        </div>
                        <Link to={registerPath} className="btn main btn-register round">
                            đăng ký
                        </Link>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        React JS
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Vương Đặng</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img2.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Animation
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img3.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Scss, Grunt JS và Boostrap 4
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Front-end căn bản
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Vương Đặng</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img2.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Front-end nâng cao
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 course">
                            <div className="wrap">
                                <a href="#" className="cover">
                                    <img src="/img/img3.png" alt="" />
                                </a>
                                <div className="info">
                                    <a className="name" href="#">
                                        Laravel framework
                                    </a>
                                    <p className="des">One of the best corporate fashion brands in Sydney</p>
                                </div>
                                <div className="bottom">
                                    <div className="teacher">
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                        <div className="name">Trần Nghĩa</div>
                                    </div>
                                    <div className="register-btn">Đăng Ký</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
