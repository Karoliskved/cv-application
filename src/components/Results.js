const Results = (props) => {
  const {
    name,
    email,
    phone,
    schoolName,
    titleOfStudy,
    startDate,
    endDate,
    companyName,
    position,
    tasks,
    jobStartDate,
    jobEndDate,
  } = props.results;
  //console.log(this.props.results.name);
  return (
    <div className="results" id="results" hidden>
      <h3>RESULTS:</h3>
      <div>Name: {' ' + name}</div>
      <div>Email: {' ' + email}</div>
      <div>Phone: {' ' + phone}</div>
      <div>School name: {' ' + schoolName}</div>
      <div>title Of Study: {' ' + titleOfStudy} </div>
      <div>
        Studied from-to: {' ' + startDate + ' '} -{' ' + endDate}
      </div>
      <div>Company Name: {' ' + companyName}</div>
      <div>Position title: {' ' + position}</div>
      <div>main task of job: {' ' + tasks}</div>
      <div>
        worked from-to: {' ' + jobStartDate + ' '}-{' ' + jobEndDate}
      </div>
      <button onClick={props.handleEdit}>edit!</button>
    </div>
  );
};

export default Results;
