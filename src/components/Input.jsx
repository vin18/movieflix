import clsx from "clsx";
import PropTypes from "prop-types";

export const Input = ({
  name,
  type = "text",
  label,
  placeholder,
  value,
  className,
  onChange,
  required,
  error,
  inputClassName,
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-top text-red-500">*</span>}
        </label>
      )}

      <div className="relative rounded-md">
        <input
          type={type}
          name={name}
          id={name}
          autoComplete={"off"}
          className={clsx(
            "block w-full rounded-md border p-2 px-3 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            {
              "mt-1": label,
              "border-red-500": error,
            },
            inputClassName
          )}
          placeholder={placeholder}
          onChange={onChange}
          value={value || undefined}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;
