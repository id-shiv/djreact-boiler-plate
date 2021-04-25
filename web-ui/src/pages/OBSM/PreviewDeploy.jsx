import React from "react";

import { Button } from "@material-ui/core";

const PreviewDeploy = ({ previousStep, nextStep, values }) => {
  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Preview and proceed to Deploy</h2>
        <div className="form__input__group">
          <div className="form__input__container">
            <p className="form__input">Preview</p>
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

export default PreviewDeploy;
