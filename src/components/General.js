import { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="name">Your full name:</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="phone">Your phone:</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
          name="phone"
        ></input>
      </div>
    );
  }
}

export default General;
