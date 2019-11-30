import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Table } from 'antd';

import './HistoryPage.scss';

const { Column } = Table;

class HistoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  goBack() {
    this.props.history.push('/');
  }

  render() {
    const { historyData } = this.props.datas;
    const data = [
      {
        key: '1',
        description: historyData[0].description[1].desc1,
        price: historyData[0].Newprice
      }
    ];

    return (
      <div>
        <div className="back-button" onClick={this.goBack.bind(this)}><Icon type="left" style={{marginRight: '1rem'}} />Back to Page One</div>
        <div className="history-wrapper">
          <Table dataSource={data}>
            <Column title="Description" dataIndex="description" key="description" />
            <Column title="Price" dataIndex="price" key="price" />
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      datas: state.getData
  }
}

export default connect(
  mapStateToProps,
  null
)(HistoryPage);
