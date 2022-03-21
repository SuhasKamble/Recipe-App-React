import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import RecipeDetails from './RecipeDetails'
import Searched from './Searched'

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cuisine/:type' element={<Cuisine />}></Route >
                <Route path='/search/:search' element={<Searched />}></Route>
                <Route path='/recipe/:recipeId' element={<RecipeDetails />}></Route>
            </Routes>
        </>
    )
}

export default Pages