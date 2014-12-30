/** @jsx React.DOM **/
var Recipes = React.createClass({  
  displayName : '',
  propTypes: {},
  mixins : [],
  getInitialState : function() {},
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() {
    var recipeNodes = this.props.foo.map(function(recipe){
    return (
        <Recipe baz={recipe.url}>
        </Recipe>
      )            
    })
    return (
    <div className="Recipes">
      <p> Recipe Bank: </p>
      {recipeNodes}
    </div>
  )}
});