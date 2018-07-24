import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }       from 'redux';
import Event from './event.js'
import {deleteArtist} from '../actions'

import closeSvg from '../assets/close.svg'
import fblogo from '../assets/facebook.png'

class Artist extends Component {



clickDelete = () => {
  this.props.deleteArtist(this.props.id)

}

  render() {

      const facebookArea =  (this.props.facebook === "") ? <p>У исполнителя нету аккаунта в facebook</p>:
                          <a className="facebook" href={this.props.facebook}><img alt="Facebook link"  src={fblogo} /></a>

      const EventsList = this.props.events.map((event,index) => {
        return (
          <li key={index}>
          <Event
              name = {event.venue.name}
              country = {event.venue.country}
              city = {event.venue.city}
              date = {event.datetime}
          />
          </li>
        )

      })

    if (this.props.events.length > 0 ) {
        return (
          <div className="Artist">
              <div className="Artist-header">
                  <img  onClick={this.clickDelete} src={closeSvg} className="delete_button"  />
              </div>
              <div className="Artist-cont">
                  <div className="Artist-info">
                      <h2>{this.props.name}</h2>
                      <img alt={this.props.name} className="photo" src={this.props.image} />
                      {facebookArea}
                  </div>
                  <div className="Events">
                      <h2>Actual Events</h2>
                      <ul className="Events-list">{EventsList}</ul>
                  </div>
              </div>
          </div>
        );
  }
  else  if (this.props.name.length === 0) {
    return (
    <div className="Artist">
        <div className="Artist-header">
            <img alt={this.props.name} onClick={this.clickDelete} src={closeSvg} className="delete_button"  />
        </div>
        <div className="not_found">
            <p>Вероятнее всего такого артиста не существует</p>
        </div>
     </div>
   )

  }

  else   {
    return (
    <div className="Artist">
        <div className="Artist-header">
            <img alt={this.props.name} onClick={this.clickDelete} src={closeSvg} className="delete_button"  />
        </div>
        <div className="Artist-info">
            <h2>{this.props.name}</h2>
            <img alt={this.props.name} className="photo" src={this.props.image} />
            {facebookArea}
        </div>

     </div>
   )
  }
  }
}

const mapStateToProps = state => ( {} );

const matchDispatchToProps = dispatch => bindActionCreators(
    {deleteArtist},
    dispatch
);

export default connect(mapStateToProps, matchDispatchToProps)(Artist)
