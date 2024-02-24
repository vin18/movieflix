import Logo from "./components/Logo";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <>
      <Logo width="70px" height="70px" />
      <h1>MovieFlix</h1>
      {/* <div>
        <button onClick={() => setOpenModal("login")}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal("register")}>Register</button>
      </div> */}

      <Modal>
        <Modal.Open opens="login">
          <button>Login</button>
        </Modal.Open>
        <Modal.Content name="login">
          <h1>Login</h1>
        </Modal.Content>
      </Modal>

      <Modal>
        <Modal.Open opens="register">
          <button>Register</button>
        </Modal.Open>
        <Modal.Content name="register">
          <h1>Register</h1>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
