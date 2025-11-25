import React, { use } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthCOntext";

const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter."
      );
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        updateUserProfile(displayName, photoURL);
        toast.success("User registered successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Signing in...", { id: "create-user" });

    signInWithGoogle()
      .then(() => {
        toast.success("Login successful!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-violet-100 to-violet-200 flex items-center justify-center px-3 w-11/12 mx-auto">
      <div className="w-full max-w-md bg-white shadow-3xl rounded-3xl p-6 border border-violet-200">
        <h1
          className="text-4xl font-extrabold text-center mb-6 
          bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent"
        >
          The Book Haven
        </h1>

        <h2 className="text-2xl font-semibold text-center text-violet-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister}>
          <label className="font-medium text-violet-700">Name</label>
          <input
            type="text"
            name="displayName"
            className="input w-full mt-1 mb-3 rounded-xl border-violet-300 focus:ring-2 focus:ring-violet-500"
            placeholder="Your Name"
            required
          />

          <label className="font-medium text-violet-700">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input w-full mt-1 mb-3 rounded-xl border-violet-300 focus:ring-2 focus:ring-violet-500"
            placeholder="Profile Image URL"
          />

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
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full rounded-xl bg-white text-violet-700 border-violet-300 mb-4 hover:bg-violet-50"
        >
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-center text-violet-700">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-violet-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
