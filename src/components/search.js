import React, { Component } from 'react';
import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';
import {fetchData} from '../actions'

import "../../node_modules/antd/dist/antd.css"
import { Input } from 'antd';
const SearchInput = Input.Search;


class Search extends Component {



  clickSearch = (value) => {
    let d = new Date();

    let current_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
    let future_date = (d.getFullYear()+4) + "-" + (d.getMonth() + 1) + "-" + d.getDate()
    let date = current_date + ',' + future_date
    this.props.fetchData(value,date)
    }

  render() {

    return (
      <div className="Search">
      <SearchInput
          className="SInput"
          placeholder="Enter name of artist"
          onSearch={value => this.clickSearch(value)}
        enterButton="Search" />
      </div>
    );
  }
}

const mapStateToProps = state => ( {} );

const matchDispatchToProps = dispatch => bindActionCreators(
    {fetchData},
    dispatch
);

export default connect(mapStateToProps,matchDispatchToProps)(Search);
