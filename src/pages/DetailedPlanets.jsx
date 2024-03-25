import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const DetailedPlanets = () => {

    const { store, actions } = useContext(Context)
    let { url } = useParams()

    useEffect(() => {
       actions.getDetailsPlanets(url)
       console.log(url)
    }, [])

    return (
        <>
            <h1>{store?.details?.name}</h1>
            

        </>
    )
}

export default DetailedPlanets

