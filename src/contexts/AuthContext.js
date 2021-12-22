import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import Loader from "../components/loader/Loader";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const setEmail = (newEmail) => {
    return updateEmail(currentUser, newEmail);
  };

  const setPassword = (newPassword) => {
    return updatePassword(currentUser, newPassword);
  };

  const setDisplayName = (name) => {
    return updateProfile(currentUser, {
      displayName: name,
    });
  };

  // add auth-state-observer here 
  useEffect(() => {
    // listen for auth-state changes
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const values = {
    currentUser,
    loading,
    login,
    logout,
    signup,
    resetPassword,
    setDisplayName,
    setEmail,
    setPassword,
  };

  return (
    <AuthContext.Provider value={values}>
      {loading && (
        // <div id="spinner">
          <Loader />
        // </div>
      )}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContextProvider as default };
