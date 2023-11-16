// Login.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full p-8 bg-black">
        <h1 className="text-3xl font-bold font-poppins text-white text-center mb-8">Venue Admin Login</h1>
        <form className="flex flex-col items-center relative">
          <input
            type="text"
            placeholder="Username"
            className="w-2/5 h-12 mb-4 rounded-2xl p-2 text-16 font-poppins border border-white bg-black text-white"
          />
          <div className="relative w-2/5">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full h-12 mb-4 rounded-2xl p-2 text-16 font-poppins border border-white bg-black text-white pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} className="text-white mb-3" />
            </button>
          </div>
          <button
            type="submit"
            className="w-2/5 h-12 text-16 rounded-2xl font-poppins bg-purple-700 text-white cursor-pointer border border-f0c3f1 hover:border-f0c3f1 active:border-f0c3f1"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
