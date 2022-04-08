import React from 'react'
import { Link } from 'react-router-dom'
import imgAllBeers from '../assets/beers.png'
import imgNewBeers from '../assets/new-beer.png'
import imgRandomBeers from '../assets/random-beer.png'

const MainPage = () => {
  return (
    <div className='main-page'>
    <Link to="/beers">
    <div className='article-main-page'>
        <img src={imgAllBeers} alt=""/>
        <h2>All Beers</h2>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio, cupiditate pariatur voluptas cumque dicta? Temporibus neque fugiat officia iste consequatur nisi deserunt sapiente, cumque aliquam, quaerat aperiam maiores accusantium.
        </p>
    </div>
    </Link>

    <Link to="/random-beer">
    <div className='article-main-page'>
        <img src={imgRandomBeers} alt=""/>
        <h2>Random Beer</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio, cupiditate pariatur voluptas cumque dicta? Temporibus neque fugiat officia iste consequatur nisi deserunt sapiente, cumque aliquam, quaerat aperiam maiores accusantium.
        </p>
    </div>
    </Link>

    <Link to="/new-beer">
    <div className='article-main-page'>
        <img src={imgNewBeers} alt="" />
        <h2>New Beer</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio, cupiditate pariatur voluptas cumque dicta? Temporibus neque fugiat officia iste consequatur nisi deserunt sapiente, cumque aliquam, quaerat aperiam maiores accusantium.
        </p>
    </div>
    </Link>
    </div>
  )
}

export default MainPage