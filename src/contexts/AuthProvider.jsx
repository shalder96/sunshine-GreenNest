import React,{useState, createContext, useContext} from 'react'

//create context
export const AuthContext = createContext()

//contetx provider wrapper
const AuthProvider = ({children} = {}) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [msg, setMsg] = useState("")
  


  //fake signup function
  const signup = (email, password, confirmPassword) => {
    let storedUsers = [];

    try {
      const usersData = localStorage.getItem("users");
      storedUsers = usersData ? JSON.parse(usersData) : [];
    } catch (error) {
      console.error("Error parsing data from local storage", error);
      storedUsers = [];
    }

    //check if the username or email already exist
    const existingUser = storedUsers.find(
      (u) => u.email === email
    )

    if(existingUser) {
      setMsg("⚠️ Username or Email already exists! Please log in.")
      return false;
    }

    // confirm password validation
    if (password !== confirmPassword) {
      setMsg("❌ Passwords do not match!");
      return false;
    }

    const newUser = {email, password};
    storedUsers.push(newUser);

    //save all users and active session
    localStorage.setItem("users", JSON.stringify(storedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);
    setMsg("✅ Signup successful!")
    return true;
  };

  //fake login function
  const login = (email, password) => {
    let storedUsers = [];

    try {
      const usersData = localStorage.getItem("users");
      storedUsers = usersData ? JSON.parse(usersData) : [];
    } catch (error) {
      console.error("Error parsing from local storage", error);
      storedUsers = [];
    }
    //allow login with email
    const existingUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("user", JSON.stringify(existingUser))
      setMsg("✅ login successful")
      return true;
    } else {
      setMsg("❌ invalid credentials!")
      return false;
    }
  }

  //fake logout function
  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }


  return (
    <AuthContext.Provider value={{msg, setMsg, user, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider