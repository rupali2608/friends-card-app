import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

function SimpleDialog(props) {
  const { onClose, open, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      style={{
        border: "1px solid",
        padding: "10px",
        boxShadow: "5px #888888",
      }}
    >
      <Dialog onClose={handleClose} open={open} maxWidth="xs">
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
          }}
        >
          <CancelIcon />
          <br />
        </IconButton>
        <br />
        <DialogTitle>
          <h1
            style={{
              borderBottom: "solid blue 3px",
              boxShadow: "revert",
            }}
          >
            Show Details
          </h1>
        </DialogTitle>
        <div>{children}</div>
        <br />
        <br />
      </Dialog>
    </div>
  );
}
export default SimpleDialog;
