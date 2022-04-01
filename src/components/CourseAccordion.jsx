import React, { createContext, useContext, useState } from "react";
function CourseAccordion({ index, title, content, position, onClick }) {
    const { numOpen } = useContext(Context);
    return (
        <div className="accordion">
            <div className="accordion__title" onClick={onClick}>
                <div className="date">Ngày {index}</div>
                <h3>{title}</h3>
            </div>
            <div className="content" style={{ display: position === numOpen ? "block" : "none" }}>
                {content}
            </div>
        </div>
    );
}

const Context = createContext();

CourseAccordion.Func = ({ children }) => {
    const [numOpen, setNumOpen] = useState(-1);

    const onClick = (index) => () => {
        setNumOpen(index);
    };
    return (
        <Context.Provider value={{ numOpen }}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, { position: i, onClick: onClick(i) });
            })}
        </Context.Provider>
    );
};

export default CourseAccordion;
