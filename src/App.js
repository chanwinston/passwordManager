import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function Generator() {
  let [password, setPassword] = useState(
    "ADD EMAIL AND WEBSITE TO SAVE TO A FILE"
  );
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
    let website = document.getElementById("websiteID").value;
    database +=
      "Website: " + website + " Email: " + email + " Password: " + password;
    setDatabase(database);
    setPassword("");
    document.getElementById("emailID").value = "";
    document.getElementById("websiteID").value = "";
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
    setPassword("COPPIED!");
  };

  const copyData = () => {
    navigator.clipboard.writeText(database);
    setDatabase("COPPIED!");
  };

  return (
    <div className='grid place-items-center w-screen h-screen bg-slate-400'>
      <div className='w-full md:w-1/2 grid bg-gray-500 h-fit rounded-lg place-items-center'>
        <h1 className='text-white first-line:tracking-tighter font-extrabold text-6xl p-5 text-center'>
          PASSWORD MANAGER
        </h1>
        <button
          onClick={generate}
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        >
          Generate Password
        </button>
        <h1 id='passwordID' className='text-center p-5 font-extrabold text-xl'>
          {password}
          <FaRegCopy
            size='15px'
            className='cursor-pointer inline ml-3'
            onClick={copy}
          />
        </h1>
        <form>
          <input
            id='emailID'
            type='text'
            className='mb-1 w-full md:w-96 appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Email'
          ></input>
          <input
            id='websiteID'
            type='text'
            className='w-full md:w-96 appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Website'
          ></input>
        </form>
        <button
          onClick={save}
          className='ml-2 mt-3 w-1/2 md:w-96 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        >
          SAVE
        </button>
        <h1 className='text-center p-5 font-extrabold text-xl'>
          {database}
          <FaRegCopy
            size='15px'
            className='cursor-pointer inline ml-3'
            onClick={copyData}
          />
        </h1>
      </div>
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
