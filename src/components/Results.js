import { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Name</div>
        <div id="provName"></div>
        <div>Email</div>
        <div id="provEmail"></div>
        <div>Phone</div>
        <div id="provPhone"></div>
        <div>School name</div>
        <div id="provSchoolName"></div>
        <div>title Of Study</div>
        <div id="provTitleOfStudy"></div>
        <div>Studied from-to</div>
        <div id="provStudyDate"></div>
        <div>Company Name</div>
        <div id="provCompanyName"></div>
        <div>Position title</div>
        <div id="provPositionTitle"></div>
        <div>main task of job</div>
        <div id="provTask"></div>
        <div>worked from-to</div>
        <div id="provWorkDate"></div>
      </div>
    );
  }
}

export default Results;
