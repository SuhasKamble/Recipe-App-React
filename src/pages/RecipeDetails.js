import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
    const [details, setDetails] = useState([])
    const params = useParams()

    const getDetails = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await api.json()
        setDetails(data)
    }

    useEffect(() => {
        getDetails(params.recipeId)
    }, [params.recipeId])
    return (
        <form className='recipe-single-item'>
            <img src={details.image} />
            <div className='recipe-data'>
                <h2>{details.title}</h2>
                <h2>instructions</h2>
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                <h2>Summary</h2>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>

            </div>
        </form>
    )
}

export default RecipeDetails