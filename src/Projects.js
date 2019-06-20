import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className="container is-fluid">
        <div className="notification">
          <h2>Project Four: Individual Project, Voyage</h2>
          <figure>
            <img className="projectimage" src="images/projects/project4.1.png" />
            <img className="projectimage" src="images/projects/project4.2.png" />
          </figure>
          <p>Timeframe: 8 days - Technologies used: CSS, JavaScript, React, Python and PostgreSQL The brief on this project was to create a full-stack application. My main idea was for users to be able to search for cruises by destination, region or ship - Where they were then able to see what is onboard the cruise ship and a description of the area. I decided that I really wanted to do my final project on my own to concentrate on doing my own API and to test myself.</p>
          <a href="https://github.com/LaurenFWinter/Project-04">Read Me</a>
          <a href="https://cruiselauren.herokuapp.com">Hosted Site</a>
        </div>
      </div>

      <div className="container is-fluid">
        <div className="notification">
          <h2>Project Three: Group of 4 developers, Nerd Crate</h2>
          <figure>
            <img className="projectimage" src="images/projects/project3.1.png" />
            <img className="projectimage" src="images/projects/project3.2.png" />
          </figure>
          <p>Timeframe: 8 days - Technologies used: HTML, CSS, JavaScript, React, MongoDB and Mongoose
Creating our own API data, and rending it on screen. An idea of a user being able to buy their favourite merchandise based on popular movies. With a brief to create an application that we could work on separate branches on Github and push it up to a master branch. This will help us work in a team in future projects. Personally, I concentrated on building the shopping cart which would store the boxes in local storage, it also added up the prices of the boxes and cleared the cart when the user logged or check out.</p>
          <a href="https://github.com/LaurenFWinter/Project-03">Read Me</a>
          <a href="https://nerdcrate.herokuapp.com">Hosted Site</a>
        </div>
      </div>

      <div className="container is-fluid">
        <div className="notification">
          <h2>Project Two: Pair Coding Project, London Trains</h2>
          <figure>
            <img className="projectimage" src="images/projects/project2.1.png" />
            <img className="projectimage" src="images/projects/project2.2.png" />
          </figure>
          <p>Timeframe: 1 1⁄2 days - Technologies used: HTML, CSS, JavaScript, Using React and third party API’s.
With a brief to work on a pair coding project, where we would work on one computer - we developed a website where user’s could see London’s well known Train Stations (Arrivals and Departures).
In this project we pulled in data from an API and used SCSS to style.</p>
          <a href="https://github.com/LaurenFWinter/Project-02">Read Me</a>
          <a href="https://laurenfwinter.github.io/Project-02">Hosted Site</a>

        </div>
      </div>

      <div className="container is-fluid">
        <div className="notification">
          <h2>Project One: Solo Project, Snake</h2>
          <figure>
            <img className="projectimage" src="images/projects/project1.1.png" />
            <img className="projectimage" src="images/projects/project1.2.png" />
          </figure>
          <p>Timeframe: 8 days - Technologies used: HTML, CSS, JavaScript
Creating the well-known snake game, our brief was to recreate a classic game using JavaScript and CSS. I had a theme of Harry Potter and Slytherin snake which is where my design came from.</p>
          <a href="https://github.com/LaurenFWinter/Project-01">Read Me</a>
          <a href="https://laurenfwinter.github.io/Project-01">Hosted Site</a>

        </div>
      </div>
    </div>
  )
}

export default Projects
