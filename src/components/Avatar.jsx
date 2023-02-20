import React from 'react'

const Avatar = (props) => {
    const { name, src, type } = props;

    let className = "w-16 h-16 rounded-full mr-4";

    if (type === "sqaure") {
        className = "w-16 h-16 flex-none rounded-md bg-slate-100";
    }

    return (
        <img className={className} src={src} alt={name} />
    )
}

export default Avatar