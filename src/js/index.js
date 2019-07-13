import React from 'react'
import { render } from 'react-dom'

import '../css/index.css'

import App from './components/App'
render(<App />, document.getElementById('app'))

/*
import text from './text'

text()

if (module.hot) {
  module.hot.accept('./text.js', () => {
    text()
  })
} 

-----------------------------------------------

import search from './search'
import render from './render'
const id = prompt('¿Quién es ese Pokémon?')

search(id)
  .then((data) => {
    render(data)
  })
  .catch(()=> {
    console.log('No sé cuál sea es Pokémon')
  })
*/