import React from "react";

import { Button } from "@material-ui/core";

const ReferenceOutputFullStack = ({
  previousStep,
  nextStep,
  saveInput,
  values,
}) => {
  const fullStackJson = [
    { text: "text one" },
    { text: [{ text: "text 2" }, { text: "text 3" }] },
  ];

  const { referenceIP } = values;

  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Reference Output Full Stack JSON</h2>
        <div className="form__input__group">
          <div className="form__input__container">
            <p className="form__input">{referenceIP}</p>
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
              onClick={function (event) {
                nextStep(event);
                saveInput("referenceDetails", JSON.stringify(fullStackJson));
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceOutputFullStack;
