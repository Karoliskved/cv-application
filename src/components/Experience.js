const Experience = (props) => {
  const { handleChange } = props;
  return (
    <div className="formSection">
      <div>
        <label htmlFor="companyName">Company name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="tasks">tasks</label>
        <textarea
          form="form"
          placeholder="main tasks of your job"
          id="tasks"
          name="tasks"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="jobStartDate">start date:</label>
        <input
          type="date"
          id="jobStartDate"
          name="jobStartDate"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="jobEndDate">Graduation date:</label>
        <input
          type="date"
          id="jobEndDate"
          name="jobEndDate"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Experience;
