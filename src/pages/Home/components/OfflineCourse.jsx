import React, { useState, useEffect } from "react";
import CourseCard from "../../../components/CourseCard";

function OfflineCourse({ courses }) {
    return (
        <section className="section-courseoffline">
            <div className="container">
                <p className="top-des">
                    The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                </p>
                <div className="textbox">
                    <h2 className="main-title">Khóa học Offline</h2>
                </div>
                <div className="list row">
                    {courses?.map((e) => (
                        <CourseCard key={e.id} {...e} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OfflineCourse;
