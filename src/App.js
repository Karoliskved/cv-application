import { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      provName: '',
      provEmail: '',
      provPhone: '',
      provSchoolName: '',
      provTitleOfStudy: '',
      provStudyDate: '',
      provCompanyName: '',
      provPositionTitle: '',
      provTask: '',
      provWorkDate: '',
      renderStatus: false,
    };
    this.getResults = this.getResults.bind(this);
  }
  getResults = (e) => {
    e.preventDefault();
    console.log('test');
    const inputs = document.getElementById('form').elements;
    //console.log(inputs[0].value);
    this.setState({
      results: inputs,
      renderStatus: true,
    });
  };
  render() {
    if (this.state.renderStatus) {
      return (
        <div className="app">
          <FormContainer getResults={this.getResults} />

          <Results results={this.state.results} />
        </div>
      );
    } else {
      return <FormContainer getResults={this.getResults} />;
    }
  }
}

export default App;
