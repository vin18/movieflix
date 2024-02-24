import Logo from "./components/Logo";
import Modal from "./components/Modal";
import AuthForm from "./components/AuthForm";

import "./App.css";

function App() {
  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }

  return (
    <>
      <Logo width="70px" height="70px" />
      <h1>MovieFlix</h1>
      <Modal>
        <Modal.Open opens="login">
          <button>Login</button>
        </Modal.Open>
        <Modal.Content name="login">
          <AuthForm onSubmit={login} buttonText="Login" />
        </Modal.Content>
      </Modal>

      <Modal>
        <Modal.Open opens="register">
          <button>Register</button>
        </Modal.Open>

        <Modal.Content name="register">
          <AuthForm onSubmit={register} buttonText="Register" />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
