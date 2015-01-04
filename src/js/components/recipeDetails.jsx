var React = require('react');

// Router & Data
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
// RecipeStore = require('recipe').RecipeStore
var request = require('superagent');
var db = require('mock_db');
var _ = require('lodash');

var RecipeDetails = React.createClass({  
  displayName : 'RecipeDetails',
  propTypes: {},
  mixins : [],
  getInitialState : function() { 

    /**
    We'll build an API here to fetch the data, passing in 
    the id. This will look like: 

    request.get()
    this.state = {data: data}

    */
    function getRecipeFromDb (id) {
      return _.find(db, {id: id})
    }
    console.log(this.props.params.recipeId)
    recipe = getRecipeFromDb(this.props.params.recipeId)
    console.log(recipe)
    return {recipe : recipe} 
  },
  componentWillMount : function() {
  },
  componentWillUnmount : function() {},
  render : function() {
    return(
    <div className="recipe">
    	<p> 
    		{this.state.recipe.title} 
    	</p>
      <p> Serves: {this.state.recipe.portions} (change)</p> 
      <p> Instructions: {this.state.recipe.instructions} (change)</p> 
      <RouteHandler/>
    </div>
  )}
});

module.exports = RecipeDetails;