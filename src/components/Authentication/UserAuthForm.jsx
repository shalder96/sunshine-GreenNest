import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box';

const UserAuthForm = ({open, onClose}) => {

  const [tab, setTab] = useState("login");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    console.log("Form submitted:", tab, formJson);
    handleClose();
  };

  return (
    
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle>
        {tab === "login" ? "Login" : "Sign Up"}
        </DialogTitle>

        <DialogContent>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{ mb: 2 }}
          >
            <Tab label="Login" value="login" />
            <Tab label="Sign Up" value="signup" />
          </Tabs>

          <DialogContentText sx={{ mb: 2 }}>
            {tab === "login"
              ? "Login with your email and password."
              : "Create an account by filling out the form."}
          </DialogContentText>

          <form onSubmit={handleSubmit} id="auth-form">
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              required
          />
            <TextField
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
            />
            {tab === "signup" && (
              <TextField
                margin="dense"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                required
              />
            )}
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            {tab === "login" ? "Login" : "Sign Up"}
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default UserAuthForm;
