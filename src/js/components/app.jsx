var React = require('react');
var Recipes = require('components/recipes');

// Router
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

//Component
var App = React.createClass({  
  displayName : 'App',
  propTypes: {},
  mixins : [],
  getInitialState : function() { return null },
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() { return (
    <RouteHandler/>
		)
  }
});

module.exports = App;