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
    <div id="results" hidden>
      <div>Name</div>
      <div id="provName">{name}</div>
      <div>Email</div>
      <div id="provEmail">{email}</div>
      <div>Phone</div>
      <div id="provPhone">{phone}</div>
      <div>School name</div>
      <div id="provSchoolName">{schoolName}</div>
      <div>title Of Study</div>
      <div id="provTitleOfStudy">{titleOfStudy}</div>
      <div>Studied from-to</div>
      <div id="provStudyDate">
        {startDate} - {endDate}
      </div>
      <div>Company Name</div>
      <div id="provCompanyName"> {companyName}</div>
      <div>Position title</div>
      <div id="provPositionTitle">{position}</div>
      <div>main task of job</div>
      <div id="provTask">{tasks}</div>
      <div>worked from-to</div>
      <div id="provWorkDate">
        {jobStartDate}-{jobEndDate}
      </div>
      <button onClick={props.handleEdit}>edit!</button>
    </div>
  );
};

export default Results;
