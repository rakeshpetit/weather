var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorPopup = require('ErrorPopup');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState(
      {isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined}
    );

    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    //  alert(errorMessage);
    });

  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(myProps){
    var location = myProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    //var location = this.state.location;
    //var temp = this.state.temp;
    var {errorMessage,isLoading,temp,location} = this.state;
    function renderError(){
      if(typeof errorMessage === 'string'){
          //debugger;
          return (<ErrorPopup message={errorMessage} />);
      }
    }
    function renderMessage(){
      if(isLoading){
          return <h3 className="text-center" style={{color: 'red'}}>Weather loading...</h3>;
      }
      else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Weather!!</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    )
  }
});

module.exports = Weather;
