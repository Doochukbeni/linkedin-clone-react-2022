import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();
  const register = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("please enter your full name");
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePicture,
        }).then(() => {
          const user = userAuth.user;
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoUrl: profilePicture,
            })
          );
        });
      })
      .catch((error) => alert(error.message));
  };
  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
    // auth;
  };
  return (
    <div className="login">
      <img
        src="https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/242713849_120176157043645_4823673981838648667_n.jpg?stp=c0.83.206.206a_dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=v4aQyhqWB0IAX-XgsDV&_nc_ht=scontent.ffjr1-6.fna&oh=00_AfB6vJCPkT_nUYotrxVe2HpiDi0JMXjS247fpOrUhWu-aQ&oe=63B04E38"
        alt="user"
      />

      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name(required if registering)"
          type="text"
        />
        <input
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="profile pic URL (optional )"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member ?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
