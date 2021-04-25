import React from "react";

import "./OBSM.scss";
import { TextField, Button } from "@material-ui/core";

const ReferenceInput = ({ nextStep, handleInputChange, values }) => {
  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Reference Input Details</h2>
        <div className="form__input__group">
          <div className="form__input__container">
            <p className="form__input">Reference IP</p>
            <TextField
              className="form__input"
              onChange={handleInputChange("referenceIP")}
              defaultValue={values.referenceIP}
              size="medium"
            ></TextField>
          </div>
        </div>
        <div className="form__button__group">
          <Button
            className="form__button"
            color="secondary"
            variant="contained"
            disabled
          >
            Back
          </Button>
          <div className="form__button__next__finish">
            <Button
              className="form__button"
              onClick={nextStep}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceInput;
