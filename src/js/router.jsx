var Router = require('react-router');
var React = require('react');
var App = require('components/app');
var Recipes = require('components/recipes')
var Recipe = require('components/recipe')
var NotFound = require('components/notfound')
var Home = require('components/home')

/**
Set up the Router object
*/

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

/**
Declare routes
*/

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="recipes" handler={Recipes}>
      <Route name="recipe" path="/recipe/:recipeId" handler={Recipe} />
    </Route>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

/**
Initiate the router
Using the HTML5 history API for cleaner URLs:
*/

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
