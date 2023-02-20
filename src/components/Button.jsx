import React from 'react'

const Button = (props) => {
    const { disabled } = props;
    return (
        <button type="submit" disabled={disabled} className="text-white absolute right-2.5 bottom-1.5 bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3">
            {props.children}
        </button>
    )
}

export default Button