import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import App from '/App';
import Welcome from './Welcome';

class AppRouter extends React.Component {
  render() {
    return {
      <Router>
        <Switch>
          <Route exact path="/" exact component={App} />
          <Route path="/Welcome" component={Welcome}/>
        </Switch>
      </Router>
    }
  }
}
export default AppRouter;
