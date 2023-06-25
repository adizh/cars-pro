import React from "react";

function Error({ children }) {
  return (
    <div
      id="error-message"
      className="alert alert-danger d-flex align-items-center  "
      role="alert"
    >
      {children}
    </div>
  );
}

export default Error;
