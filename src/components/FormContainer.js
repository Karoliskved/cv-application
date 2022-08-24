import { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import General from './General';
class FormContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form id="form" onSubmit={this.props.handleSubmit}>
        <fieldset id="fieldset" disabled={this.props.disabledStatus}>
          <General handleChange={this.props.handleChange} />
          <br></br>
          <Education handleChange={this.props.handleChange} />
          <br></br>
          <Experience handleChange={this.props.handleChange} />
          <br></br>
          <button type="submit">submit!</button>
        </fieldset>
      </form>
    );
  }
}

export default FormContainer;
