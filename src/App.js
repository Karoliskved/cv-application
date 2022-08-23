import { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <FormContainer />
        <Results />
      </div>
    );
  }
}

export default App;
