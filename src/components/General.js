import { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="name">Your full name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        ></input>
        <label htmlFor="phone">Your phone:</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
          name="phone"
          onChange={handleChange}
        ></input>
      </div>
    );
  }
}

export default General;
