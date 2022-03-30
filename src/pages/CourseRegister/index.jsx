import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/course";
import { HOME_PATH } from "../../constants/path";
import { currency } from "../../ultis/number";
import { convertDate } from "../../ultis/date";
export default function Register() {
    const { id } = useParams();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const { data: detail } = useQuery(
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

    const submitRegister = (ev) => {
        ev.preventDefault();
        const errorObj = {};

        if (!form.userName) {
            errorObj.userName = "Họ và tên là trường bắt buộc nhập";
        }
        if (!form.phone) {
            errorObj.phone = "Số điện thoại là trường bắt buộc nhập";
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObj.phone = "Số điện thoại không đúng định dạng";
        }
        if (!form.facebook) {
            errorObj.facebook = "Facebook URL là trường bắt buộc nhập";
        }
        if (!form.email) {
            errorObj.email = "Email là trường bắt buộc nhập";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObj.email = "Email không đúng định dạng";
        }
        setErrors(errorObj);
        if (Object.keys(errorObj).length === 0) {
            console.log("validate thành công");
        }
    };
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến {detail.title} </h1>
                        <div className="main-info">
                            <div className="date">
                                <strong>Khai giảng:</strong> {convertDate(detail.opening_time)}
                            </div>
                            <div className="time">
                                <strong>Thời lượng:</strong> {detail.count_video}
                            </div>
                            <div className="time">
                                <strong>Học phí:</strong> {currency(detail.money)}
                            </div>
                        </div>
                        <form className="form">
                            <Input label="Họ và tên" onChange={(ev) => (form.userName = ev.target.value)} placeholder="Họ và tên bạn" error={errors.userName} />
                            <Input label="Số điện thoại" onChange={(ev) => (form.phone = ev.target.value)} placeholder="Số điện thoại" error={errors.phone} />
                            <Input.Email label="Email" onChange={(ev) => (form.email = ev.target.value)} placeholder="Email của bạn" error={errors.email} />
                            <Input
                                label="URL Facebook"
                                onChange={(ev) => (form.facebook = ev.target.value)}
                                placeholder="https://facebook.com"
                                error={errors.facebook}
                            />

                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <Input
                                label="Ý kiến cá nhân"
                                onChange={(ev) => (form.note = ev.target.value)}
                                placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                            />
                            <button className="btn main rect" onClick={submitRegister}>
                                đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
