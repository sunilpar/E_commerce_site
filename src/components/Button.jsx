import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2  rounded-lg  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-150 hover:duration-150 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}