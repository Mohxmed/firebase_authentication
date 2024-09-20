import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import App from "./App.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/LogIn/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
