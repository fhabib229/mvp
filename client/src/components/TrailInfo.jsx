import React, { PureComponent } from 'react';

export default class TrailInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return (
      <div>
        <div id="title">{info.trail_name}</div>
        <div>{`Trail Length: ${info.length_roundtrip} miles, roundtrip`}</div>
        <div>{`Elevation: ${info.gain}ft`}</div>
        <div>{`Average Rating: ${info.rating}/5`}</div>
        <div>{`Parking Pass: ${info.parking_pass}`}</div>
        <a target='_blank' href={info.link}>Learn More</a>
      </div>
    );
  }
}
