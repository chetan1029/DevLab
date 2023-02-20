import React, { useContext } from 'react'
import Avatar from '../components/Avatar'
import Icon from '../components/Icon'
import Loading from '../components/Loading'
import Stats from '../components/Stats'
import Tags from '../components/Tags'
import SearchUser from './SearchUser'
import Alert from '../components/Alert'
import GithubContext from '../context/GithubContext'
import dateFormat from 'dateformat'

const UserDetail = (props) => {
    const { username } = props;

    const { useUser, useUserLanguages } = useContext(GithubContext);

    const { user, isError, isLoading } = useUser(username);
    const { languages, isError: isLangError, isLoading: isLangLoading } = useUserLanguages(username);

    const alert = {
        "type": "error",
        "message": "User you are trying to search is not exist."
    }

    if (isError || isLangError) return <Alert alert={alert} />

    return (
        <div className='w-full max-w-4xl'>
            <div className='flex flex-row shadow-lg divide-x'>
                <div className='relative w-full bg-white rounded-l-lg  overflow-hidden'>
                    {isLoading && <Loading />}
                    {!isLoading &&
                        <>
                            <div className="flex items-center px-6 py-4">
                                <Avatar src={user.avatar_url} name={user.name} type="round" />
                                <div>
                                    <h2 className="text-xl text-sky-900 font-medium truncate">{user.name}</h2>
                                    <p className="text-sky-600"><a href={user.html_url} target="_blank" rel="noreferrer">@{user.login}</a></p>
                                </div>
                            </div>

                            <div className="px-6 pb-6 space-y-3">
                                <p className="text-gray-600">{user.bio}</p>

                                <Stats repos={user.public_repos} followers={user.followers} following={user.following} type="user" />

                                <div className='flex flex-row space-x-2'>
                                    {!isLangLoading && languages?.map((language, index) => {
                                        return <Tags key={index}>{language}</Tags>
                                    })}
                                </div>

                                <div className='flex flex-row space-x-2'>
                                    <p className='w-full text-left text-sm'>
                                        {user.location ? <><Icon type="location" /> {user.location}</> : <></>}
                                    </p>
                                    <p className='w-full text-right text-sm'>
                                        <Icon type="calender" />
                                        {dateFormat(user.created_at, "mmmm yyyy")}
                                    </p>
                                </div>
                            </div>
                        </>}
                </div>
                {(!isLoading && !isLangLoading) && <SearchUser username={username} languages={languages} followers={1000} repos={10} />}
            </div>
        </div>
    )
}

export default UserDetail