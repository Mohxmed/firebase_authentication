import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

export const handleSignUp = (email, password, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      updateName(res, username);
    })
    .then(() => {
      toast.success("User created successfully!");
    })
    .catch((error) => {
      handleSignInError(error);
    });
};

export const handleSignIn = (username, password, navigate) => {
  signInWithEmailAndPassword(auth, username, password)
    .then((res) => {
      toast.success("Successfully Logged-in!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    })
    .catch((error) => {
      handleSignUpError(error);
    });
};

function updateName(res, username) {
  const user = res.user;
  updateProfile(user, {
    displayName: username,
  });
  return res;
}

export function handleSignOut(navigate) {
  signOut(auth).then((res) => {
    console.log(res);
    navigate("/");
  });
}

function handleSignInError(error) {
  if (error.code === "auth/email-already-in-use") {
    toast.error("Email is already in use!");
  } else if (error.code === "auth/invalid-email") {
    toast.error("Please Type a Valid Email");
  } else if (error.code === "auth/weak-password") {
    toast.warning(`This is Week Password, Please use a Strong one`);
  } else {
    toast.error(`Error: ${error.message}`);
  }
}

function handleSignUpError(error) {
  if (error.code === "auth/invalid-credential") {
    toast.error("Wrong Password or Email!");
  } else if (error.code === "auth/invalid-email") {
    toast.error("Please Type a Valid Email");
  } else {
    toast.error(`Error: ${error.message}`);
  }
}
