import React, { Component } from "react";

export default class MessageModal extends Component {
  render() {
    return (
      <div className="overlay">
        <div id="modal" className="modal">
          <button
            id="close-button"
            className="close-button"
            onClick={() => {
              this.props.closeModal();
            }}
          >
            &times;
          </button>
          <p id="modal-message">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
