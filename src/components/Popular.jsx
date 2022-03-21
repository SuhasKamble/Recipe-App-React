import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const check = localStorage.getItem('popular')
        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div className="top-recipes popular-wrapper">
            <h2>Popular Recipes</h2>
            <div className="top-recipes-container">
                {
                    popular.map(item => {
                        return <Link to={`recipe/${item.id}`} key={item.id} className="recipe-item">
                            <img src={item.image}
                                alt="" />
                            <h4>{item.title}</h4>
                            <div className="gradient"></div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Popular