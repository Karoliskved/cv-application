import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="companyName">Company name</label>
        <input type="text" id="companyName"></input>
        <label htmlFor="position">Position</label>
        <input type="text" id="position"></input>
        <label htmlFor="tasks">tasks</label>
        <textarea form="form" placeholder="main tasks of your job"></textarea>
        <label htmlFor="jobStartDate">start date:</label>
        <input type="date" id="jobStartDate"></input>
        <label htmlFor="jobEndDate">Graduation date:</label>
        <input type="date" id="jobEndDate"></input>
      </div>
    );
  }
}

export default Experience;
