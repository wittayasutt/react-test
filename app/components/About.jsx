const React = require('react')

let About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Component</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
}

module.exports = About
