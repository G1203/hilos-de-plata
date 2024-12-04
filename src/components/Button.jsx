import PropTypes from "prop-types";

const Button = ({ children, onClick, type, className, ...props }) => {
  return (
    <button
      type={type}
      className={
        className +
        " bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors dark:"
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
