import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../constants/path";

export default function Information() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(HOME_PATH);
    };
    return (
        <div className="tab1">
            <label>
                <p>
                    Họ và tên<span>*</span>
                </p>
                <input type="text" placeholder="Nguyễn Văn A" />
            </label>
            <label>
                <p>
                    Số điện thoại<span>*</span>
                </p>
                <input type="text" placeholder="0949******" />
            </label>
            <label>
                <p>
                    Email<span>*</span>
                </p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>
                    Facebook<span>*</span>
                </p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>
                    Skype<span>*</span>
                </p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect" onClick={onClick}>
                LƯU LẠI
            </div>
        </div>
    );
}
