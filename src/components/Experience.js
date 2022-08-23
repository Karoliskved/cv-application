import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="companyName">Company name</label>
        <input type="text" id="companyName" name="companyName"></input>
        <label htmlFor="position">Position</label>
        <input type="text" id="position" name="position"></input>
        <label htmlFor="tasks">tasks</label>
        <textarea
          form="form"
          placeholder="main tasks of your job"
          id="tasks"
          name="tasks"
        ></textarea>
        <label htmlFor="jobStartDate">start date:</label>
        <input type="date" id="jobStartDate" name="jobStartDate"></input>
        <label htmlFor="jobEndDate">Graduation date:</label>
        <input type="date" id="jobEndDate" name="jobEndDate"></input>
      </div>
    );
  }
}

export default Experience;
