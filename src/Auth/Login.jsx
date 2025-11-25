import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthCOntext";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

// ✅ FRIENDLY FIREBASE ERROR MESSAGES
const getFriendlyMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/too-many-requests":
      return "Too many login attempts. Please wait a moment.";

    case "auth/invalid-email":
      return "Invalid email format.";

    default:
      return "Something went wrong. Please try again.";
  }
};

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    if (!email || !password) {
      return toast.error("Please fill in all fields.");
    }

    toast.loading("Logging in...", { id: "login" });

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!", { id: "login" });
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(getFriendlyMessage(error.code), { id: "login" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Signing in...", { id: "login" });

    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful!", { id: "login" });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(getFriendlyMessage(error.code), { id: "login" });
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-violet-100 to-violet-200 flex items-center justify-center px-4 w-11/12 mx-auto">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-violet-200">
        <h1
          className="text-4xl font-extrabold text-center mb-6 
          bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent"
        >
          The Book Haven
        </h1>

        <h2 className="text-2xl font-semibold text-center text-violet-700 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogIn}>
          <label className="font-medium text-violet-700">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full mt-1 mb-3 rounded-xl border-violet-300 focus:ring-2 focus:ring-violet-500"
            placeholder="Email Address"
            required
          />

          <label className="font-medium text-violet-700">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full mt-1 mb-4 rounded-xl border-violet-300 focus:ring-2 focus:ring-violet-500"
            placeholder="Password"
            required
          />

          <button className="btn w-full text-white rounded-xl mb-4 bg-gradient-to-r from-violet-600 to-violet-400 hover:opacity-90">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full rounded-xl bg-white text-violet-700 border-violet-300 mb-4 hover:bg-violet-50"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="text-center text-violet-700">
          New to our website?{" "}
          <Link
            to="/auth/register"
            className="text-violet-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
