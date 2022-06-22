import { useState } from "react";
import React from "react";

function Generator() {
  let [password, setPassword] = useState("AREA FOR PASSWORD");
  const generate = () => {
    password = "";
    const SYMBOLS =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/";
    for (let i = 0; i < 16; i++) {
      password += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
    }
    setPassword(password);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        onClick={generate}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      >
        Generate Password
      </button>
      <h1>{password}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Generator />
    </div>
  );
}

export default App;
