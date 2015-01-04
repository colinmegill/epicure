var React = require('react');
var Recipe = require('components/recipe')

/** 
Data for now, but will be replaced with Flux
*/ 

var db = require('mock_db')

/** 
Router
*/

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

/**
Component
*/

var Recipes = React.createClass({
  displayName : 'Recipes',
  propTypes: {},
  mixins : [],
  /**
  Get initial state grabs our fake data...
  */
  getInitialState : function() { return {db: db} },
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() {
    var recipeNodes = this.state.db.map(function(recipe){
    return (
        <Recipe recipe={recipe} key={recipe.id}>
        </Recipe>
      )
    })
    return (
    <div className="Recipes">
      <p> Recipe Bank: </p>
      {recipeNodes}
      <RouteHandler/>
    </div>
  )}
});

module.exports = Recipes;