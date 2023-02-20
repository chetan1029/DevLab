import React from 'react'

const Stats = (props) => {
    const { repos, followers, following, type } = props;

    let className = "flex flex-row bg-sky-50 rounded-lg space-x-2 px-5 py-3";

    if (type === "searchuser") {
        className = "flex flex-row space-x-2 border-slate-300 border-solid border rounded-lg px-3 py-2 text-sm";
    }

    return (
        <div className={className} data-testid="stats_detail">
            <div className='w-full'>
                <p className="text-sky-700">Repos</p>
                <p className="text-sky-800 font-medium">{repos}</p>
            </div>
            <div className='w-full'>
                <p className="text-sky-700">Followers</p>
                <p className="text-sky-800 font-medium">{followers}</p>
            </div>
            <div className='w-full'>
                <p className="text-sky-700">Following</p>
                <p className="text-sky-800 font-medium">{following}</p>
            </div>
        </div>
    )
}

export default Stats