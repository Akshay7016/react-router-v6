import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* Never use className on <Link>, Rather use <Navlink> */}
            <ul className='navbar'>
                <li><NavLink to='/' className="navbar-link">Home</NavLink></li>
                <li><NavLink to='/about' className="navbar-link">About</NavLink></li>
                <li><NavLink to='/contact' className="navbar-link">Contact</NavLink></li>
            </ul>

            {/* If we use <a> tag over <Link> then page will reload. So always use <Link> tag */}
            {/* <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/'>Home</a></li>
            </ul> */}
        </div>
    )
}

export default Navbar;