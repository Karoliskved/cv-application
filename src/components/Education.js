import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="schoolName">Your school name:</label>
        <input type="text" id="schoolName"></input>
        <label htmlFor="titleOfStudy">title of study:</label>
        <input type="text" id="titleOfStudy"></input>
        <label htmlFor="startDate">start date:</label>
        <input type="date" id="startDate"></input>
        <label htmlFor="endDate">Graduation date:</label>
        <input type="date" id="endDate"></input>
      </div>
    );
  }
}

export default Education;
