import React, { Component } from "react";

import "./OBSM.scss";

import ReferenceInput from "./ReferenceInput";
import ReferenceOutputFullStack from "./ReferenceOutputFullStack";
import ReferenceOutputTemplate from "./ReferenceOutputTemplate";
import PreviewDeploy from "./PreviewDeploy";
import DeployJob from "./DeployJob";

export const StepperStep = ({ index, description, activeStep }) => {
  const isActive = index + 1 === activeStep ? true : false;
  const isDisabled = index + 1 < activeStep ? true : false;
  const stepNumberActiveClass = isActive ? "step__active" : "";
  const stepNumberDisabledClass = isDisabled ? "step__disabled" : "";

  return (
    <>
      <div className="step__wrapper">
        <div
          className={
            "step__number " +
            stepNumberActiveClass +
            " " +
            stepNumberDisabledClass
          }
        >
          {index + 1}
        </div>
        <div className="step__description">{description}</div>
      </div>
    </>
  );
};

export default class OBSMForm extends Component {
  state = {
    steps: [
      {
        description: "Reference",
      },
      {
        description: "FullStack",
      },
      {
        description: "Template",
      },
      {
        description: "Preview",
      },
      {
        description: "Deploy",
      },
    ],
    activeStep: 1,
    referenceIP: "",
    referenceDetails: {},
  };

  nextStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  previousStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };

  handleInputChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  saveInput = (input, value) => {
    this.setState({ [input]: value });
  };

  render() {
    const { steps, activeStep } = this.state;
    const { referenceIP, referenceDetails } = this.state;
    const values = { referenceIP, referenceDetails };

    switch (activeStep) {
      case 1:
        return (
          <>
            <div className="stepper__container horizontal">
              <div className="stepper__wrapper horizontal">
                {steps.map((step, index) => (
                  <StepperStep
                    key={index}
                    index={index}
                    description={step.description}
                    activeStep={1}
                  />
                ))}
              </div>
              <ReferenceInput
                nextStep={this.nextStep}
                handleInputChange={this.handleInputChange}
                values={values}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="stepper__container horizontal">
              <div className="stepper__wrapper horizontal">
                {steps.map((step, index) => (
                  <StepperStep
                    key={index}
                    index={index}
                    description={step.description}
                    activeStep={2}
                  />
                ))}
              </div>
              <ReferenceOutputFullStack
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                saveInput={this.saveInput}
                values={values}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="stepper__container horizontal">
              <div className="stepper__wrapper horizontal">
                {steps.map((step, index) => (
                  <StepperStep
                    key={index}
                    index={index}
                    description={step.description}
                    activeStep={3}
                  />
                ))}
              </div>
              <ReferenceOutputTemplate
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                values={values}
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="stepper__container horizontal">
              <div className="stepper__wrapper horizontal">
                {steps.map((step, index) => (
                  <StepperStep
                    key={index}
                    index={index}
                    description={step.description}
                    activeStep={4}
                  />
                ))}
              </div>
              <PreviewDeploy
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                values={values}
              />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="stepper__container horizontal">
              <div className="stepper__wrapper horizontal">
                {steps.map((step, index) => (
                  <StepperStep
                    key={index}
                    index={index}
                    description={step.description}
                    activeStep={5}
                  />
                ))}
              </div>
              <DeployJob previousStep={this.previousStep} values={values} />
            </div>
          </>
        );
      default:
        return <h3>Error</h3>;
    }
  }
}
