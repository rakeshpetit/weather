var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return(
    <h3>Its {temp} degrees in {location}</h3>
  )
}

module.exports = WeatherMessage;
