var React = require('react');

/**
Create fractions from decimals
https://www.npmjs.com/package/lb-ratio
*/

var ratio = require('lb-ratio');

/** 
Router
*/

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

/**
Component
*/

var Ingredient = React.createClass({  
  displayName : 'Ingredient',
  propTypes: {},
  mixins : [],
  getInitialState : function() { return {} },
  componentWillMount : function() {
    if (this.props.ingredient.quantity < 1) {
      return this.state.fraction = ratio.parse(this.props.ingredient.quantity)
                                        .simplify().toString();
    } else {
      return this.state.fraction = this.props.ingredient.quantity;
    }
  },
  componentWillUnmount : function() {},
  render : function() {return(
    <div className="row Recipe-ingredient">
      <div className="col-lg-6">
        <p className="Recipe-ingredientLeft">
          {this.props.ingredient.ingredient}
        </p>
      </div>
    	<div className="col-lg-6">
        <p>
          {this.state.fraction} {this.props.ingredient.measurement} {this.props.ingredient.modifier}
        </p>
      </div>
      <RouteHandler/>
    </div>
  )}
});

module.exports = Ingredient;