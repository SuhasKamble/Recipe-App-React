import React from 'react'
import { MdRestaurantMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Link to='/' className='logo'>
            <MdRestaurantMenu />
            Recipes
        </Link>
    )
}

export default Nav