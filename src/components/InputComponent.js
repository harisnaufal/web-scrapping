import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Spin } from 'antd';
import { getUrlData } from '../action-creator/GetData';
// import _ from 'lodash';

import 'antd/dist/antd.css';
import './InputComponent.scss';

const { Search } = Input;

class InputComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  getUrlDetail(value) {
    this.props.GetData(value)
    .then(() => {
      const { allData } = this.props;
      console.log('aaaaa', allData);
      if (allData) {
        console.log('masuk', allData);
        this.setState({ loading: false });
      } else {
        console.log('nggaa', allData);
        this.setState({ loading: true });
      }
    });
  }

  render() {
    console.log('this prps', this.props);
    return (
      <div className="input-wrapper">
        <div className="input-wrapper__title">Put Your URL Below Here</div>
        <Spin spinning={this.state.loading} delay={200}>
          <Search
            placeholder="input URL"
            enterButton
            size="large"
            onSearch={this.getUrlDetail.bind(this)}
          />
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
      datas: state.rootReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    GetData: getUrlData
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
