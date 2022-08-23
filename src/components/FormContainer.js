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
      <form id="form">
        <General />
        <br></br>
        <Education />
        <br></br>
        <Experience />
        <br></br>
      </form>
    );
  }
}

export default FormContainer;
