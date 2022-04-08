import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link , useParams} from 'react-router-dom'
import Header from './Header'

const BeerDetail = (props) => {
    const [beersList, setBeersList] = useState([])
    let { beerId } = useParams()

    
    useEffect(() => {
        const connection = async () =>{
           const api = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
           setBeersList(api.data)
           console.log(api)
        }
        connection()

    },[])


    const findBeer = beersList.find((beer)=> beer._id === beerId)
    
    if(findBeer){
        
        beersList.map((beer)=>{
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
            )}
            )}
        
            console.log(findBeer)
            return (
                <div>
                <Header/>
                <>findBeer={findBeer}</>

    </div>
  )
}

export default BeerDetail
