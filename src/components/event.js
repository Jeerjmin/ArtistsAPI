import React, { Component } from 'react';

class Event extends Component {

  render() {

    return (
      <div className="Event">
        <h3>{this.props.name}</h3>
        <p>{this.props.country}</p>
        <p>{this.props.city}</p>
        <p>{this.props.date}</p>
      </div>
    );
  }
}



export default Event;
