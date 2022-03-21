import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        if (input) {
            navigate(`/search/${input}`)
        }
    }
    return (
        <form className='input-group' onSubmit={submitForm}>
            <AiOutlineSearch />
            <input type="text" placeholder='Search a recipee..' value={input} onChange={e => setInput(e.target.value)} />
        </form>
    )
}

export default Search