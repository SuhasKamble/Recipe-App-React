import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories'>
            <Link className="category" to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <span>Italian</span>
            </Link>
            <Link className="category" to={'/cuisine/american'}>
                <FaHamburger />
                <span>American</span>
            </Link>
            <Link className="category" to={'/cuisine/thai'} >
                <GiNoodles />
                <span>Thai</span>
            </Link>
            <Link className="category" to={'/cuisine/japanese'}>
                <GiChopsticks />
                <span>Japanese</span>
            </Link>
        </div>
    )
}

export default Categories