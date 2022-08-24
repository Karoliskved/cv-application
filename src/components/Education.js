import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="schoolName">Your school name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          onChange={handleChange}
        ></input>
        <label htmlFor="titleOfStudy">title of study:</label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          onChange={handleChange}
        ></input>
        <label htmlFor="startDate">start date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleChange}
        ></input>
        <label htmlFor="endDate">Graduation date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleChange}
        ></input>
      </div>
    );
  }
}

export default Education;
