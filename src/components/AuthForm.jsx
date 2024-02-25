import PropTypes from "prop-types";

import Input from "./Input";
import Button from "./Button";

function AuthForm({ buttonText, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input className="mb-4" label="Username" name="username" />
      <Input
        className="mb-4"
        label="Password"
        name="password"
        type="password"
      />
      <Button>{buttonText}</Button>
    </form>
  );
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AuthForm;
