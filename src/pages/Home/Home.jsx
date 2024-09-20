import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { handleSignOut } from "../../utils/handleAuth";

export default function Home() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogOut = () => {};

  return (
    <div className="w-full h-screen bg-gradient-to-r  from-green-800 to-teal-900 flex items-center justify-center">
      <div className="w-3/4 flex justify-center items-center flex-col gap-5">
        {user && (
          <>
            <div className="flex gap-2">
              <span className=" px-2 py-1 text-sm text-white bg-blue-600 rounded-full">
                {user.displayName}
              </span>
              <span className="uppercase px-2 py-1 text-sm text-white bg-teal-600 rounded-full">
                {user.email}
              </span>
            </div>
          </>
        )}
        <h1 className=" leading text-center text-white font-bold sm:text-3xl/tight md:text-5xl/tight text-2xl/tight ">
          Welcome in! Actually we do not have Content. Just wanted to let you
          test, forgive me for that :D
        </h1>
        <div className="flex gap-5">
          <button
            onClick={() => {
              handleSignOut(navigate);
            }}
            className="px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500 md:text-xl  active:opacity-50 bg-yellow-400"
          >
            Log out
          </button>
          <Link to="/" className="flex items-center">
            <button className="block">Back to Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
