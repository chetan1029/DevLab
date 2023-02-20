import React, { useState } from 'react'
import Header from '../components/Header';
import Search from './Search';
import UserDetail from './UserDetail';

const Home = (props) => {
    const [username, setUsername] = useState("");
    const [renderUserDetail, setRenderUserDetail] = useState(false);

    function handleUsernameChange(e) {
        setRenderUserDetail(false);
        setUsername(e.target.value);
    }

    function handleUsernameSubmit(e) {
        e.preventDefault();
        setRenderUserDetail(true);
    }

    return (
        <div className="bg-gray-100 dark:bg-slate-800">
            <div className='flex flex-col items-center justify-center min-h-screen space-y-5'>

                <Header>DevLab</Header>

                <Search username={username} onUsernameChange={handleUsernameChange} onUsernameSubmit={handleUsernameSubmit} />

                {renderUserDetail && <UserDetail username={username} />}
            </div>
        </div>
    )
}

export default Home