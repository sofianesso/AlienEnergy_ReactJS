import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./SignUp.css";
import { Button } from "../Button/Button";
import { auth } from "../../firebase-config";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-form register">
          <h3>Register User</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>

          <Button buttonStyle="btn--primary" onClick={register}>
            Create User
          </Button>
        </div>

        <div className="signup-form login">
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>

          <Button buttonStyle="btn--outline" onClick={login}>
            Login
          </Button>
        </div>
      </div>
      {user ? (
        <div className="logout-container">
          <h4>User Logged In:</h4>
          <p>{user.email}</p>
          <Button buttonStyle="btn--outline" onClick={logout}>
            Sign Out
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SignUp;
