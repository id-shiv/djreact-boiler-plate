import React from "react";

import { Button } from "@material-ui/core";

const ReferenceOutputTemplate = ({ previousStep, nextStep, values }) => {
  const { referenceDetails } = values;
  console.log(referenceDetails);
  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Reference Output Template</h2>
        <div className="form__input__group">
          <div className="form__input__container">
            <p className="form__input">{referenceDetails}</p>
          </div>
        </div>
        <div className="form__button__group">
          <Button
            className="form__button"
            color="secondary"
            variant="contained"
            onClick={previousStep}
          >
            Back
          </Button>
          <div className="form__button__next__finish">
            <Button
              className="form__button"
              variant="contained"
              color="primary"
              onClick={nextStep}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceOutputTemplate;
