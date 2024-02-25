import PropTypes from "prop-types";
import clsx from "clsx";

const ButtonVariants = {
  primary:
    "text-white border-indigo-700 bg-indigo-700 hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700",
  secondary:
    "border-pink-200 bg-pink-200 text-pink-700 hover:text-pink-700 hover:bg-pink-300 hover:border-pink-300 focus:ring focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-200 active:border-pink-200",
  white:
    "border border-gray-300 text-gray-700 bg-white hover:bg-gray-300 focus:outline-none focus:ring-offset-2 focus:ring-brand-500",
};

function Button({ variant = "primary", children, loading = false, className }) {
  const variantStyles = ButtonVariants[variant];

  return (
    <button
      type="button"
      className={clsx(
        "relative inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2",
        variantStyles,
        className
      )}
    >
      {children}
      {loading && (
        <svg
          className="w-5 h-5 ml-2 fill-current animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
        </svg>
      )}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
