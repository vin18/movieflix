import PropTypes from "prop-types";

function AuthForm({ buttonText, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default AuthForm;
