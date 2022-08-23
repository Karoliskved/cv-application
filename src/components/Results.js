import { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { results } = this.props;
    return (
      <div>
        <div>Name</div>
        <div id="provName">{results['name'].value}</div>
        <div>Email</div>
        <div id="provEmail">{results['email'].value}</div>
        <div>Phone</div>
        <div id="provPhone">{results['phone'].value}</div>
        <div>School name</div>
        <div id="provSchoolName">{results['schoolName'].value}</div>
        <div>title Of Study</div>
        <div id="provTitleOfStudy">{results['titleOfStudy'].value}</div>
        <div>Studied from-to</div>
        <div id="provStudyDate">
          {results['startDate'].value} - {results['endDate'].value}
        </div>
        <div>Company Name</div>
        <div id="provCompanyName"> {results['companyName'].value}</div>
        <div>Position title</div>
        <div id="provPositionTitle">{results['position'].value}</div>
        <div>main task of job</div>
        <div id="provTask">{results['tasks'].value}</div>
        <div>worked from-to</div>
        <div id="provWorkDate">
          {results['jobStartDate'].value}-{results['jobEndDate'].value}
        </div>
      </div>
    );
  }
}

export default Results;
