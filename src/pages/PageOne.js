import React, { Component } from 'react';
import InputComponent from '../components/InputComponent';

import './PageOne.scss';

class PageOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="pageone-wrapper">
        <span className="pageone-wrapper__title">Fabelio Test</span>
        <InputComponent />
      </div>
    );
  }
}

export default PageOne;
