import { Link } from "react-router-dom";
import PageWrapper from "./components/ui/PageWrapper";

export default function App() {
  return (
    <PageWrapper>
      <div className="w-3/4 flex justify-center items-center flex-col gap-5">
        <h1 className=" leading text-center text-white font-bold sm:text-3xl/tight md:text-5xl/tight text-2xl/tight ">
          Sorry, To get access to the Content Please Go Sign In.
        </h1>
        <div className="flex gap-5 flex-col sm:flex-row">
          <Link to="/login">
            <button className="w-full px-6 py-2 rounded-sm hover:bg-yellow-500 md:text-xl  active:opacity-50 bg-yellow-400">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 rounded-sm hover:bg-blue-500 md:text-xl  active:opacity-50 bg-blue-400">
              Create a new account
            </button>
          </Link>
        </div>
        <Link to="/home" className="flex flex-col text-center">
          <button className="px-6 py-2 rounded-sm hover:bg-gray-500 md:text-xl  active:opacity-50 bg-gray-400">
            Go Home
          </button>
          <span className="mt-2 text-white text-xs">
            Just for showcase ( Protected Route )
          </span>
        </Link>
      </div>
    </PageWrapper>
  );
}
