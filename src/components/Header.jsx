import React from 'react'
import logo from '../logo.png';

const Header = (props) => {
    return (
        <div className='w-full max-w-4xl items-left'>
            <h4 className='text-3xl'><img className="w-8 h-8 rounded mr-1 inline" src={logo} alt={props.children} /> {props.children}</h4>
        </div>
    )
}

export default Header