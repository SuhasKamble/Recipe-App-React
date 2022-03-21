import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    const getPopular = async () => {
        const check = localStorage.getItem('veggie')
        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div className="top-recipes popular-wrapper">
            <h2>Vegetarian Recipes</h2>
            <div className="top-recipes-container">
                {
                    veggie.map(item => {
                        return <Link to={`/recipe/${item.id}`} key={item.id} className="recipe-item">
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

export default Veggie
