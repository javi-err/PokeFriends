import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Card from './Card'
import BackCard from './BackCard'
import * as serviceWorker from './serviceWorker';
import {pokemon} from './pokemon';
import 'tachyons'

const renderCards = pokemon.map((pokemons) => 
<Card name={pokemons.name} id={pokemons.id} type={pokemons.type} color={pokemons.color} imgURL={pokemons.imgURL}/>)

  ReactDOM.render(
    <React.StrictMode>
      {renderCards}
  </React.StrictMode>,
  document.getElementById('root')
  )



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
