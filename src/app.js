import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Hero from './Hero'
import Aboutme from './Aboutme'
import Projects from './Projects'

class App extends React.Component{
  render(){
    return(
      <main>
        <div className="container">
          <Hero />
          <Aboutme />
          <Projects />
        </div>
      </main>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
