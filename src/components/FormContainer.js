import Education from './Education';
import Experience from './Experience';
import General from './General';
const FormContainer = (props) => {
  return (
    <form id="form" onSubmit={props.handleSubmit}>
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
