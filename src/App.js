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
      disabledStatus: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange = (e) => {
    const key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      renderStatus: true,
      disabledStatus: true,
    });

    document.querySelector('#results').hidden = false;
  };
  handleEdit = () => {
    const values = document.querySelector('#form');
    //console.log(values.name.value);
    for (const property in this.state) {
      if (property !== 'renderStatus' && property !== 'disabledStatus')
        values[property].value = this.state[property];
    }
    document.querySelector('#results').hidden = true;
    this.setState({
      disabledStatus: false,
    });
  };
  render() {
    /*if (this.state.renderStatus) {
      return (
        <div>
          <FormContainer
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            disabledStatus={this.state.disabledStatus}
          />
          <Results results={this.state} handleEdit={this.handleEdit} />
        </div>
      );
    } else {
      return (
        <FormContainer
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          disabledStatus={this.state.disabledStatus}
        />
      );
    }
  }*/
    return (
      <div>
        <FormContainer
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          disabledStatus={this.state.disabledStatus}
        />
        <Results results={this.state} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
