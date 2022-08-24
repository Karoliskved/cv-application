import { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // results: [],
      name: '',
      email: '',
      phone: '',
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: '',
      renderStatus: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    console.log('test1');
    console.log(e.target.value);
    console.log(typeof e.target.name);
    console.log(typeof key);
    console.log(this.state[key]);
    this.setState({
      [key]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs[0].value);
    this.setState({
      renderStatus: true,
    });
  };
  render() {
    if (this.state.renderStatus) {
      return (
        <div className="app">
          <FormContainer
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />

          <Results results={this.state} />
        </div>
      );
    } else {
      return (
        <FormContainer
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  }
}

export default App;
