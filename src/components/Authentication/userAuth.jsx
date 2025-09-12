import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function AuthDialog() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0); // 0 = Login, 1 = Signup

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabChange = (event, newValue) => setTab(newValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("Form Data:", formJson);
    handleClose();
  };

  return (
    <React.Fragment>
      {/* Trigger Button */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Account
      </Button>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>
          <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Login" />
            <Tab label="Signup" />
          </Tabs>
        </DialogTitle>

        <DialogContent>
          {tab === 0 ? (
            /* Login Form */
            <Box component="form" onSubmit={handleSubmit} id="login-form">
              <TextField
                autoFocus
                required
                margin="dense"
                id="login-email"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="login-password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </Box>
          ) : (
            /* Signup Form */
            <Box component="form" onSubmit={handleSubmit} id="signup-form">
              <TextField
                autoFocus
                required
                margin="dense"
                id="signup-name"
                name="name"
                label="Full Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="signup-email"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="signup-password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {tab === 0 ? (
            <Button type="submit" form="login-form">
              Login
            </Button>
          ) : (
            <Button type="submit" form="signup-form">
              Signup
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
