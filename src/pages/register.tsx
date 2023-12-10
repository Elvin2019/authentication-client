import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Function to validate the password
  const validatePassword = (password: string) => {
    // Password requirements
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if all requirements are met
    if (password.length < minLength) {
      return "Password should have a minimum length of 8 characters.";
    }
    if (!hasLetter) {
      return "Password should contain at least 1 letter.";
    }
    if (!hasNumber) {
      return "Password should contain at least 1 number.";
    }
    if (!hasSpecialChar) {
      return "Password should contain at least 1 special character.";
    }

    return "";
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }

    // Perform signup logic here
    // ...

    // Redirect to application page
    window.location.href = "/application-page";
  };

  return (
    <form className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2 max-w-sm">
        <Player
          src="https://lottie.host/1a19785d-05b3-4199-af9c-1c859b20bda4/eXsZ5pMXEk.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="md:w-1/2 max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
