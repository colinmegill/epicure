/** @jsx React.DOM **/
var Recipe = React.createClass({  
  displayName : '',
  propTypes: {},
  mixins : [],
  getInitialState : function() {},
  componentWillMount : function() {},
  componentWillUnmount : function() {},
  render : function() {return(
  	<p> 
  		<a href={this.props.baz}> 
  			{this.props.baz} 
  		</a>
  	</p>
  )}
});