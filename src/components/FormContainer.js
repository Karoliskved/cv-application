import Education from './Education';
import Experience from './Experience';
import General from './General';
import '../style.css';
const FormContainer = (props) => {
  return (
    <form id="form" onSubmit={props.handleSubmit} className="form">
      <fieldset id="fieldset" disabled={props.disabledStatus}>
        <General handleChange={props.handleChange} />
        <br></br>
        <Education handleChange={props.handleChange} />
        <br></br>
        <Experience handleChange={props.handleChange} />
        <br></br>
        <button type="submit">submit!</button>
      </fieldset>
    </form>
  );
};

export default FormContainer;
