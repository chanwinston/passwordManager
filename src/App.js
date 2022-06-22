function Generator() {
  const generate = function (length) {
    let password = "";
    const SYMBOLS =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/";
    for (let i = 0; i < 8; i++) {
      password += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
    }
    console.log(password);
  };

  return <button onClick={generate}>Generate Password</button>;
}

function App() {
  return (
    <div className='App'>
      <Generator />
    </div>
  );
}

export default App;
