import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import * as Api from './middleware/api';
import PageOne from './pages/PageOne';
import DetailPage from './pages/DetailPage';
import HistoryPage from './pages/HistoryPage';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
