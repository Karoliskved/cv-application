const Education = (props) => {
  const { handleChange } = props;
  return (
    <div className="formSection">
      <div>
        <label htmlFor="schoolName">Your school name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="titleOfStudy">title of study:</label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="startDate">start date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="endDate">Graduation date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Education;
