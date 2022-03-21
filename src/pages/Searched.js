import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Searched = () => {
    const [search, setSearch] = useState([])
    const params = useParams()
    const getSearch = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await api.json()
        setSearch(data.results)
    }

    useEffect(() => {
        getSearch(params.search)
    }, [params.search])
    return (
        <div className='search-recipes'>
            <h2>You searched for {params.search}</h2>
            <div className='search-recipes-container'>
                {
                    search.map(item => {
                        return <Link to={`/recipe/${item.id}`} key={item.id} className="search-recipe-item">
                            <img src={item.image}
                                alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Searched