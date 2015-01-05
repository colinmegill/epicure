var React = require('react');

/** 
Router
*/

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Recipe = React.createClass({  
  displayName : 'Recipe',
  propTypes: {},
  mixins : [],
  getInitialState : function() { return null },
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() {return(
    <div className="recipe">
    	<p> 
    		<Link to="RecipeDetails" params={{recipeId: this.props.recipe.id}}> 
    			{this.props.recipe.title}
        </Link>
    	</p>
      <p> Serves: {this.props.recipe.portions} (change)</p> 
      <RouteHandler/>
    </div>
  )}
});

module.exports = Recipe;



/**
Ingredient 

  render : function() {
    var ingredientNodes = *ingredents*.map(function(ingredient){
    return (
        <Recipe recipe={recipe} key={recipe.id}>
        </Recipe>
      )
    })
    return (
    <div className="Recipes">
      <p> Recipe Bank: </p>
      {recipeNodes}
      <RouteHandler {...this.props}/>
    </div>
  )}
*/