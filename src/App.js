import React, { Component } from "react";
import Date from "./components/Date";
import MessageModal from "./components/MessageModal";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      isModalActive: false,
      message: "",
    };
  }

  componentDidMount() {
    fetch("https://e-to-e.herokuapp.com/getCountdown/")
      .then((data) => data.json())
      .then((data) => data.data)
      .then((arr) => {
        this.setState({
          data: arr,
          isLoaded: true,
          isModalActive: false,
          message: "",
        });
      });
  }

  getMonth(date) {
    if (!date) return "unknown";
    let monthNumber = date.substring(3, 5),
      months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JULY",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
    return months[monthNumber - 1];
  }

  render() {
    let { data, isLoaded } = this.state;
    console.log(data.date);

    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="container">
          {data.map((item, index) => {
            return (
              <Date
                day={item.date && item.date.substring(0, 2)}
                month={this.getMonth(item.date)}
                key={index}
                i={index}
                message={item.text_msg}
                openModal={() => {
                  this.setState({
                    isModalActive: true,
                    message: item.text_msg,
                  });
                }}
              />
            );
          })}
          {this.state.isModalActive && (
            <MessageModal
              message={this.state.message}
              closeModal={() => {
                this.setState({ isModalActive: false });
              }}
            />
          )}
        </div>
      );
    }
  }
}
