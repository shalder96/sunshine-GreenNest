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
import useAuth from '../../contexts/AuthProvider';

const UserAuthForm = ({open, onClose}) => {
  const {user, login, signup} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [tab, setTab] = useState("login");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const success = signup(email, password);
    try {
      if(success) {
         setMsg("Login successful ✅.");
      } else {
        setMsg("❌ Invalid username/email or password!");
      }
    } catch (error) {
      setMsg("Login failed ❌: " + error.message);
    }
  }
  const handleSignup = (e) => {
    e.preventDefault();
    try {
      signup(email, password);
    } catch (error) {
      setMsg("Signup failed ❌;" + error.message);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === "login"){
      handleLogin()
    } else {
      handleSignup()
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
          />
            <TextField
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
              />
            )}
          </form>
          {msg && (<p className='py-4 text-sm text-black'>{msg}</p>)}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' form="subscription-form">
            {tab === "login" ? "Login" : "Sign Up"}
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default UserAuthForm;
