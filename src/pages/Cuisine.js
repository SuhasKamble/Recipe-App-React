import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    const params = useParams()
    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const data = await api.json()
        setCuisine(data.results)

    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])
    return (
        <div className='search-recipes'>
            <h2>You searched for {params.type}</h2>
            <div className='search-recipes-container'>
                {
                    cuisine.map(item => {
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

export default Cuisine