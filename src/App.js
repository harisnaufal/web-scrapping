import React, { Component } from 'react';
// import * as Api from './middleware/api';
import PageOne from './/pages/PageOne';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // const url = 'https://fabelio.com/ip/kursi-dacia.html';
    // Api.sendUrlLink(url)
    // .then((res) => {
    //   console.log('res', res);
    // })
  }

  render() {
    // const { loading } = this.state;
    return (
      <React.Fragment>
        <PageOne />
      </React.Fragment>
    );
  }
}

export default App;
