import React from "react";
import { Spinner } from "react-bootstrap";
import "./CategorySpinner.css";

const CategorySpinner = () => {
  return (
    <div className="spinner__loading">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only spinner__loading">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CategorySpinner;

const a = 2