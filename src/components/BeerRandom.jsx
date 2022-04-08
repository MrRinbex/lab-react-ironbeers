import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const BeerRandom = (props) => {
    const [beersList, setBeersList] = useState([])

    
    useEffect(() => {
        const connection = async () =>{
           const api = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
           setBeersList(api.data)
           console.log(api)
        }
        connection()

    },[])

  return (
    <div>
                <Header/>
        {beersList.map((beer)=>{
            return (
                <>
                <div className='article'>
                <img src ={beer.image_url} alt=""/>
                <div className='description'>
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>{beer.first_brewed}</h3>
                <h3>{beer.attenuation_level}</h3>
                <p>{beer.description}</p>
                <h3>{beer.contributed_by}</h3>
                </div>
                </div>
                </>
                

            )
        })}
    </div>
  )
}

export default BeerRandom