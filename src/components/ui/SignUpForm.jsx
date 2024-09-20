import { Link } from "react-router-dom";
import InputText, { InputPassword } from "../InputText";

const SignUpForm = ({ userData, handleChange, isLoading, handleSubmit }) => {
  return (
    <div className="sm:w-2/4 md:w-2/5 lg:w-1/4 w-5/6 min-h-[200px] bg-slate-700/35 shadow-lg rounded-lg ">
      <form className="p-4 w-full space-y-2" onSubmit={handleSubmit}>
        <h1 className="text-center text-white m-0">Firebase Auth</h1>
        <p className="text-center text-white text-xs block pb-2">
          Sign Up with your Email & Password
        </p>

        <InputText
          value={userData.username}
          disabled={isLoading}
          handleChange={handleChange}
          name={"username"}
        />
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
        <InputPassword
          value={userData.password}
          disabled={isLoading}
          handleChange={handleChange}
          name={"password"}
          placeholder={"Re-type Your Password"}
        />

        <button
          disabled={isLoading}
          className={
            isLoading
              ? "loading-button bg-blue-500/50"
              : "custom-button bg-blue-500 active:bg-blue-600"
          }
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>

        <Link
          replace
          to="/login"
          className="block underline text-blue-300 text-sm text-center cursor-pointer active:opacity-70 "
        >
          Switch to Login
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
