import React from 'react'
import SearchUserDetail from './SearchUserDetail';

const SearchUserList = (props) => {
    const { userList } = props;

    return (
        <ul className="divide-y divide-slate-100 bg-slate-50">
            {userList.map((user) =>
                <SearchUserDetail username={user.login} key={user.id} />
            )}
        </ul>
    )
}

export default SearchUserList