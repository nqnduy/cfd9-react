import React from "react";

export default function Input({ label, onChange, placeholder, error }) {
    return (
        <>
            <label>
                <p>
                    {label}
                    <span>*</span>
                </p>
                <input type="text" onChange={onChange} placeholder={placeholder} />
            </label>
            {error && <p className="errors">{error}</p>}
        </>
    );
}
Input.Email = ({ label, onChange, placeholder, error }) => {
    return (
        <>
            <label>
                <p>
                    {label}
                    <span>*</span>
                </p>
                <input type="text" onChange={onChange} placeholder={placeholder} />
            </label>
            {error && <p className="errors">{error}</p>}
        </>
    );
};
