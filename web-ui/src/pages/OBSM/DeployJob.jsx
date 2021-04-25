import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const ConfimationDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Confirm
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are about to exit the operation, Are you sure?.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          No
        </Button>
        <Button color="primary">Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeployJob = ({ previousStep, values }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Deployment in progress</h2>
        <div className="form__input__group">
          <div className="form__input__container">
            <p className="form__input">Job In Progress</p>
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
              onClick={handleClickOpen}
            >
              Exit
            </Button>
          </div>
        </div>
        <ConfimationDialog open={open} handleClose={handleClose} />}
      </div>
    </>
  );
};

export default DeployJob;
