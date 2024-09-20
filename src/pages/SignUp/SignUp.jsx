import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { fakeLoading } from "../../utils/fakeLoading";
import { handleSignUp } from "../../utils/handleAuth";

import PageWrapper from "../../components/ui/PageWrapper";
import SignUpForm from "../../components/ui/SignUpForm";

const initUser = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [userData, setUserData] = useState(initUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fakeLoading(setIsLoading);
    handleSignUp(userData.email, userData.password, userData.username);
  };

  return (
    <>
      <ToastContainer />
      <PageWrapper>
        <SignUpForm
          userData={userData}
          handleChange={handleChange}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      </PageWrapper>
    </>
  );
}
