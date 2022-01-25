import React, { Component } from "react";

export default class Date extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.openModal();
        }}
        className="date-card"
      >
        <p>{this.props.day}</p>
        <p className="font-semibold">{this.props.month}</p>
      </div>
    );
  }
}
