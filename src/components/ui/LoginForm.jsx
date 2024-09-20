import { useState } from "react";
// Components
import InputText, { InputPassword } from "../InputText";

// Utils
import { fakeLoading } from "../../utils/fakeLoading";
import { handleSignIn } from "../../utils/handleAuth";

// Router
import { useNavigate, Link } from "react-router-dom";

// Toast
import { ToastContainer } from "react-toastify";

const initUser = {
  email: "Mohxmed@gmail.com",
  password: "211291",
};

export default function LoginForm() {
  // State
  const [userData, setUserData] = useState(initUser);
  const [isLoading, setIsLoading] = useState(false);
  // Navigate Function
  const navigate = useNavigate();

  // Handle Events
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    fakeLoading(setIsLoading);
    handleSignIn(userData.email, userData.password, navigate);
  };

  return (
    <div className="sm:w-2/4 md:w-2/5 lg:w-1/4 w-5/6 min-h-[200px] bg-slate-700/35 shadow-lg rounded-lg ">
      <ToastContainer />
      <form className="p-4 w-full space-y-2" onSubmit={handleSubmit}>
        <h1 className="text-center text-white m-0">Firebase Auth</h1>
        <p className="text-center text-white text-xs block pb-2">
          Login with your Email & Password
        </p>

        <InputText
          value={userData.email}
          disabled={isLoading}
          handleChange={handleChange}
          name={"email"}
        />
        <InputPassword
          value={userData.password}
          disabled={isLoading}
          handleChange={handleChange}
          name={"password"}
          placeholder={"Type Your Password"}
        />

        <button
          disabled={isLoading}
          className={
            isLoading
              ? "loading-button bg-yellow-500/50"
              : "custom-button bg-yellow-500 active:bg-yellow-600"
          }
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        <Link
          replace
          to="/signup"
          className="block underline text-blue-300 text-sm text-center cursor-pointer active:opacity-70 "
        >
          Switch to Signup
        </Link>
      </form>
    </div>
  );
}
