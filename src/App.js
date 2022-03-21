import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Nav from './components/Nav'
import Search from './components/Search'
import Pages from './pages/Pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='header'>
          <Nav />
          <Search />
          <Categories />
        </header>
        <Pages />
      </div>
    </BrowserRouter>
  )
}

export default App