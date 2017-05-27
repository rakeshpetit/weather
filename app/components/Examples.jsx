var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Few ways to check weather</p>
      <ol>
        <li>
          <Link to="/?location=Mumbai">
            Mumbai</Link>
        </li>
        <li>
        <Link to="/?location=Colombo">
          Colombo</Link>
      </li>
      </ol>
    </div>

  )
}

module.exports = Examples;
