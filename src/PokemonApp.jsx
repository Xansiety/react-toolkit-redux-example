import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getpokemons } from './store/slices/pokemon';



export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpokemons());
  }, [])
  


  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}
