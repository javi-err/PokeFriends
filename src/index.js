import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Card from './Card'
import * as serviceWorker from './serviceWorker';
import {pokemon} from './pokemon';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <Card name={pokemon[0].name} id={pokemon[0].id} type={pokemon[0].type} color={pokemon[0].color} />
    <Card name={pokemon[1].name} id={pokemon[1].id} type={pokemon[1].type} color={pokemon[1].color} />
    <Card name={pokemon[2].name} id={pokemon[2].id} type={pokemon[2].type} color={pokemon[2].color} />
    <Card name={pokemon[3].name} id={pokemon[3].id} type={pokemon[3].type} color={pokemon[3].color} />
    <Card name={pokemon[4].name} id={pokemon[4].id} type={pokemon[4].type} color={pokemon[4].color} />
    <Card name={pokemon[5].name} id={pokemon[5].id} type={pokemon[5].type} color={pokemon[5].color} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
