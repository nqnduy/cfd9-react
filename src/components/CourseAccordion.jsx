import React from "react";
function CourseAccordion({ index, title, description }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">Ngày {index}</div>
                <h3>{title}</h3>
            </div>
            <div className="content">{description}</div>
        </div>
    );
}

export default CourseAccordion;
