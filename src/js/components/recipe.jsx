var React = require('react');

// Router
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

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
    		<a href={this.props.recipe.title}> 
    			{this.props.recipe.title} 
    		</a>
    	</p>
      <p> Serves: {this.props.recipe.portions} (change)</p> 
      <RouteHandler/>
    </div>
  )}
});

module.exports = Recipe;