import PropTypes from "prop-types";
import * as React from "react";

const App = ({ message, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;
