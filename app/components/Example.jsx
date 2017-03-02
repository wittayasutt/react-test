const React = require('react')
const {Link} = require('react-router')

let Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Example Component</h1>
      <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Bangkok'>Bangkok, BKK</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
    </div>
  )
}

module.exports = Example
