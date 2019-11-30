import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Spin } from 'antd';
import { getUrlData } from '../action-creator/GetData';
import _ from 'lodash';

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
      const { datas } = this.props;
      if(!_.isEmpty(datas)) {
        const { history } = this.props;
        history.push('/detail');
      } else {
        alert('Error while getting the data');
      }
    });
  }

  gotoHistory() {
    const { history } = this.props;
    history.push('/history');
  }

  render() {
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
        <div className="input-wrapper__history" onClick={this.gotoHistory.bind(this)}>History</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      datas: state.getData
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
