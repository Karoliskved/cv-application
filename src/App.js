import { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import Results from './components/Results';

const App = (props) => {
  const [state, setState] = useState({
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
  });
  const handleChange = (e) => {
    const key = e.target.name;
    setState((state) => ({
      ...state,
      [key]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setState((state) => ({
      ...state,
      renderStatus: true,
      disabledStatus: true,
    }));

    document.querySelector('#results').hidden = false;
  };
  const handleEdit = () => {
    const values = document.querySelector('#form');
    //console.log(values.name.value);
    for (const property in state) {
      if (property !== 'renderStatus' && property !== 'disabledStatus')
        values[property].value = state[property];
    }
    document.querySelector('#results').hidden = true;
    setState((state) => ({
      ...state,
      disabledStatus: false,
    }));
  };

  return (
    <div>
      <div className="header">CV-application</div>
      <div className="main">
        <FormContainer
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          disabledStatus={state.disabledStatus}
        />
        <Results results={state} handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;
