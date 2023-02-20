import React from 'react'

const SearchUserHeader = (props) => {
    return (
        <header className="bg-white space-y-1 px-6 py-4">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">{props.children}</h2>
            </div>
        </header>
    )
}

export default SearchUserHeader