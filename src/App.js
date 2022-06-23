import React, { useState } from "react";

function Generator() {
  let [password, setPassword] = useState("");
  let [database, setDatabase] = useState([]);

  const generate = () => {
    password = "";
    const SYMBOLS =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/";
    for (let i = 0; i < 16; i++) {
      password += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
    }
    setPassword(password);
  };

  const save = () => {
    let email = document.getElementById("emailID").value;
    database += "Email: " + email + " Password: " + password;
    setDatabase(database);
    setPassword("");
    document.getElementById("emailID").value = "";
  };

  return (
    <div className='grid justify-center items-center h-screen bg-slate-400'>
      <button
        onClick={generate}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      >
        Generate Password
      </button>
      <h1>{password}</h1>
      <form>
        <label>EMAIL</label>
        <br />
        <input id='emailID' type='text'></input>
      </form>
      <button
        onClick={save}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      >
        SAVE
      </button>
      <h1>{database}</h1>
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
