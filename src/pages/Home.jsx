import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/AppContext'

const Home = () => {

    const { store, actions } = useContext

    useEffect(() => {
        actions.getpeople()
        actions.getplanets()
        actions.getvehicles()
    }, [])

    return (

<div className='d-flex m-2'>
            {
                store?.people?.results?.length > 0 ?
                    store?.people?.results?.map((people) => {
                        return (
                            <div className="card m-3" key={people.index} style={{width: 500 + 'px'}}>
                                <img src={people.url} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{people.name}</h5>
                                        <p class="card-text">Gender: {people.gender} <br />
                                                            Hair color: {people.hair_color} <br />
                                                            Birth Year: {people.birth_year}</p> <br />
                                        <a href="#" className="btn btn-primary">More Details</a>
                                        <button className='btn btn-warning'>Favorites</button>
                                    </div>
                            </div>
                        )
                    }) : (
                        <h4 className='text-center'>Lista de contactos vacia</h4>
                    )
            }
            </div>

       
    )
}

export default Home
