import React from 'react'
import { Alert } from "react-bootstrap";

const CustomErrorMessage = ({error}) => {
  return (
    <Alert variant="warning" className="my-3">
      <strong>Error:</strong> {error.message}
    </Alert>
  );
}

export default CustomErrorMessage
