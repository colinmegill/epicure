var React = require('react');
var Recipes = require('components/recipes');

/** 
Router
*/

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


//Component
var App = React.createClass({  
  displayName : 'App',
  propTypes: {},
  mixins : [],
  getInitialState : function() { return null },
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() { return (
    <div>
    <Link to="app"> Home </Link>
    <Link to="recipes"> Recipes </Link>
    <RouteHandler {...this.props}/>
    </div>
		)
  }
});

/**
Note {...this.props}, see:

http://facebook.github.io/react/docs/jsx-spread.html
https://github.com/rackt/react-router/blob/master/docs/guides/overview.md#dynamic-segments
*/ 

module.exports = App;