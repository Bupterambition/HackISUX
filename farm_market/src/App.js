import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Farmers from './farmers';
import AddToCart from './AddToCart';
import NavHeader from './NavHeader';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
            <NavHeader />
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/Farmers" component={Farmers}/>
              <Route path="/addToCart" component={AddToCart} />
            </Switch>
          </React.Fragment>
      </Router>
    );
  }
}

export default App;
