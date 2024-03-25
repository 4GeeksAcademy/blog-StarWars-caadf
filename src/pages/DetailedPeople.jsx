import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const DetailedPeople = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
       actions.getDetailsPeople(id)
       console.log(id)
    }, [id])

    const { name, height, mass, hair_color, skin_color, eye_color } =
    store.detailedpeople;

    return (
        <>
           {/*  <h1>{store?.details?.name}</h1> */}
            <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">Height: {height}</p>
        <p className="card-text">Mass: {mass}</p>
        <p className="card-text">Hair Color: {hair_color}</p>
        <p className="card-text">Skin Color: {skin_color}</p>
        <p className="card-text">Eye Color: {eye_color}</p>
      </div>

        </>
    )
}

export default DetailedPeople