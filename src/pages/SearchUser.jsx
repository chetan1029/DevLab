import React, { useContext } from 'react';
import SearchUserHeader from './SearchUserHeader';
import SearchUserList from './SearchUserList';
import GithubContext from '../context/GithubContext';
import Loading from '../components/Loading';
import LoadMore from '../components/LoadMore';

const SearchUser = (props) => {
    const { username, languages, followers, repos } = props;

    const { useSearchUsers } = useContext(GithubContext);
    const { userList, size, setSize, isLoading, isLoadingMore, isReachingEnd, isError } = useSearchUsers(username, languages, followers, repos);

    return (
        <div className='relative w-full bg-white rounded-r-lg overflow-y-auto max-h-80'>
            {isLoading && <Loading />}
            {!isLoading &&
                <>
                    {<section className="divide-y divide-slate-100">
                        <SearchUserHeader>{userList.total_count} Developers you can collaborate with</SearchUserHeader>
                        <SearchUserList userList={userList.items} />
                        <footer className="bg-white space-y-1 px-6 py-4 text-center">
                            {(!isError && isReachingEnd) && <p className='font-medium text-gray-900'>No more results</p>}
                            {isError && <p className='font-medium text-gray-900'>Having some problem with the internet please try again later.</p>}
                            {!isError && !isReachingEnd && <LoadMore onClick={() => setSize(size + 1)} isLoadingMore={isLoadingMore} />}
                        </footer>
                    </section>}
                </>
            }
        </div>
    )
}

export default SearchUser