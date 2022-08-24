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
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    /*console.log('test1');
    console.log(e.target.value);
    console.log(typeof e.target.name);
    console.log(typeof key);
    console.log(this.state[key]);*/
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
  handleEdit = () => {
    console.log('test');
    const values = document.querySelector('#form');
    console.log(values.name.value);
    for (const property in this.state) {
      //console.log(property);
      if (property != 'renderStatus')
        values[property].value = this.state[property];
    }
  };
  render() {
    if (this.state.renderStatus) {
      return (
        <div className="app">
          <FormContainer
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />

          <Results results={this.state} handleEdit={this.handleEdit} />
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
