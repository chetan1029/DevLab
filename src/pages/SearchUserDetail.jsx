import React, { useContext } from 'react'
import Avatar from '../components/Avatar'
import Stats from '../components/Stats'
import Loading from '../components/Loading'
import GithubContext from '../context/GithubContext'

const SearchUserDetail = (props) => {
    const { username } = props;

    const { useUser } = useContext(GithubContext);
    const { user, isError, isLoading } = useUser(username);

    return (
        <>
            {isLoading && <Loading />}
            {!isLoading &&
                <a href={user.html_url} target="_blank" rel="noreferrer" className="flex items-start space-x-6 p-6 hover:bg-slate-100" >
                    <Avatar src={user.avatar_url} name={user.name} type="sqaure" />
                    <div className="min-w-0 relative flex-auto">
                        <h2 className="font-semibold text-slate-900 truncate pr-20">{user.name}</h2>
                        <div className="mt-2 flex flex-wrap text-sm leading-6 font-medium space-x-3">
                            <div className="absolute top-0 right-0 flex items-center text-sky-600">
                                @{user.login}
                            </div>
                        </div>
                        <Stats repos={user.public_repos} followers={user.followers} following={user.following} type="searchuser" />
                    </div>
                </a>
            }
        </>
    )
}

export default SearchUserDetail