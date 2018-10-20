import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import App from './App';
import Welcome from './Welcome';
import Farmers from './farmers';
import AddToCart from './AddToCart';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Farmers" component={Farmers}/>
          <Route path="/addToCart" component={AddToCart} />
        </Switch>
      </Router>
    )
  }
}
export default AppRouter;
