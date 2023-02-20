import React from 'react'

const Tags = (props) => {

    const className = "text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-50 text-sky-700 rounded-full";

    return (
        <div className={className} >
            {props.children}
        </div>
    )
}

export default Tags