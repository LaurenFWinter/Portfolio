import React from 'react'

const Aboutme = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Before joining General Assembly’s Software Engineering Immersive Course, I was self-employed and running my own business. I designed and built my own website with Yell.com, using template designs, but this sparked an interest in me to take things further and has led me to independently start looking at creating websites.
        On the course, I have enjoyed being a team player, interacting with different people, collaborating our ideas and has made me look forward to developing my technical skills. I would like to continue to work in a team, where I can learn and develop as an individual.</p>
        <div className="imageskill" style={{ backgroundImage: 'url(images/skills/html.svg)' }}>

            </div>
      <div className="columnskills">
        <figure className="image is-128x128">
          <img src="images/skills/html.svg" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/css.svg" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/sass.svg" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/bulma.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/js.svg" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/react.png" />
        </figure>
      </div>
      <div className="columnskills">
        <figure className="image is-128x128">
          <img src="images/skills/mongo.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/expressjs.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/node.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/json-logo.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/npm.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/yarn.png" />
        </figure>
      </div>
      <div className="columnskills">
        <figure className="image is-128x128">
          <img src="images/skills/git.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/github.svg" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/heroku.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/insomnia.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/trello.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/atom.svg" />
        </figure>
      </div>
      <div className="columnskills">
        <figure className="image is-128x128">
          <img src="images/skills/python.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/postgresql.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/mysql.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/restapi.png" />
        </figure>
        <figure className="image is-128x128">
          <img src="images/skills/webpack.png" />
        </figure>
      </div>
    </div>
  )
}

export default Aboutme
