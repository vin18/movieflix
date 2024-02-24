import Logo from "./components/Logo";

function App() {
  return (
    <>
      <Logo width="70px" height="70px" />
      <h1>MovieFlix</h1>
      <div>
        <button onClick={() => alert("Login clicked")}>Login</button>
      </div>
      <div>
        <button onClick={() => alert("Register clicked")}>Register</button>
      </div>
    </>
  );
}

export default App;
