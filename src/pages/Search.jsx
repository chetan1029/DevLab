import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Icon from '../components/Icon'

const Search = (props) => {
    const { username, onUsernameChange, onUsernameSubmit } = props;

    return (
        <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden px-2 py-2' data-testid="search">
            <form onSubmit={onUsernameSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon type="search" />
                    </div>
                    <Input id="search" name="serach" placeholder="Enter your Github ID" value={username} onChange={onUsernameChange} />
                    <Button disabled={!username ? true : false}>Search</Button>
                </div>
            </form>
        </div>
    )
}

export default Search