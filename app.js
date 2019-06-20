import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Hero from './Hero'

class App extends React.Component{
  render(){
    return(
      <main>
        <div className="container">
          <Hero />
        </div>
      </main>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
