import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import { Input } from "@material-ui/core";

export default function Modal({ show, handleToggle, onSaveTodo }) {
  const [title, setTitle] = useState("");

  const handleOnSaveClick = () => {
    onSaveTodo(title);
    handleToggle();
  };

  const handleOnTitlechnage = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleToggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Enter todo title</DialogTitle>
        <DialogContent>
          <Input value={title} onChange={handleOnTitlechnage} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnSaveClick} color="primary" autoFocus>
            Save
          </Button>
          <Button onClick={handleToggle} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  onSaveTodo: PropTypes.func.isRequired,
};
