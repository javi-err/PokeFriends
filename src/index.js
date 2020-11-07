import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Card from './Card'
import BackCard from './BackCard'
import * as serviceWorker from './serviceWorker';
import {pokemon} from './pokemon';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <Card name={pokemon[0].name} id={pokemon[0].id} type={pokemon[0].type} color={pokemon[0].color} />
    <BackCard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
