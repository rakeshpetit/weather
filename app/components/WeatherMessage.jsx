var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return(
    <h2 className="text-center" style={{color: 'blue'}}>Its {temp} degrees in {location}</h2>
  )
}

module.exports = WeatherMessage;
