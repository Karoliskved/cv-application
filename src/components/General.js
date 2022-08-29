const General = (props) => {
  const { handleChange } = props;
  return (
    <div className="formSection">
      <div>
        <label htmlFor="name">Your full name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Your phone:</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
          name="phone"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default General;
