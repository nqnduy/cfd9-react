import React from "react";
import { Link } from "react-router-dom";
function Teacher({ teacher }) {
    return (
        <div className="teaches">
            <div className="teacher">
                <div className="avatar">
                    <img src={teacher?.avatar?.link} alt="" />
                </div>
                <div className="info">
                    <div className="name">{teacher?.title}</div>
                    <div className="title">{teacher?.position}</div>
                    <p className="intro">{teacher?.description}</p>
                    {teacher?.website && (
                        <p>
                            <strong>Website:</strong>
                            <Link target="_blank" to={teacher.website}>
                                {teacher.website}
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Teacher;
