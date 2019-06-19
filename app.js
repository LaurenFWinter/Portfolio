import React from 'react'
import ReactDOM from 'react-dom'


import 'bulma'
import './style.scss'
import Navbar from './Navbar'
import Hero from './Hero'
import Software from './Software'


class App extends React.Component {
  render(){
    return(
      <main>
        <Navbar />
        <div className="container">
          <Hero />
          <Software />
        </div>
      </main>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
