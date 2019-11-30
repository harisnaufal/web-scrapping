import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import './DetailPage.scss';

class DetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  goBack() {
    this.props.history.push('/');
  }

  render() {
    const { allData } = this.props.datas;
    return (
      <div>
        <div className="back-button" onClick={this.goBack.bind(this)}><Icon type="left" style={{marginRight: '1rem'}} />Back to Page One</div>
        <div className="detail-wrapper">
          <div className="detail-wrapper__image">
            <img src="https://m2fabelio.imgix.net/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/m/o/Mondy_Chair_(Blue_Jay)_1.jpg" width="500" height="250" alt="" />
          </div>
          <div className="detail-wrapper__content">
            <span className="detail-wrapper__content-title">{allData.title}</span>
            <span className="detail-wrapper__content-desc">{allData.description[0].desc0}</span>
            <span className="detail-wrapper__content-desc">{allData.description[1].desc1}</span>
            <span className="detail-wrapper__content-desc">{allData.description[2].desc2}</span>
            <span className="detail-wrapper__content-newprice">{allData.Newprice}</span>
            <span className="detail-wrapper__content-oldprice">{allData.OldPrice}</span>
          </div>
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
)(DetailPage);
