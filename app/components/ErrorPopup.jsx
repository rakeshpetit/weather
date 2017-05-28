var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorPopup = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var popupObj = (<div className="reveal tiny text-center" id="error-popup" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          Cool
        </button>
      </p>
    </div>);
    var $popup = $(ReactDOMServer.renderToString(popupObj));
    $(ReactDOM.findDOMNode(this)).html($popup);
    var error = new Foundation.Reveal($('#error-popup'));
    error.open();
  },
  render: function(){
    return(
            <div></div>
        );
}
});



module.exports = ErrorPopup;
