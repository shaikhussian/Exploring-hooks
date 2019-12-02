import React, { Component } from "react";

// *** with using constructor *** //

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     })
//   }
//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>
//   }
// }

// *** with out using constructor *** //

export default class App extends Component {

  state = { buttonText: "Click me, please" };

  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  }
  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>
  }
}
