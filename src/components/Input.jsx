import React from 'react'

const Input = (props) => {
    const { id, placeholder, name, value, onChange } = props
    return (
        <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="block w-full p-4 pl-10 text-lg text-gray-900 rounded-lg focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder={placeholder}
            required
        />
    )
}

export default Input