const InputText = ({ name, disabled = false, value, handleChange }) => {
  return (
    <input
      required
      className="custom-input placeholder-white/50 placeholder:text-sm"
      type="text"
      name={name}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      placeholder={`Type Your ${name}`}
    />
  );
};

export const InputPassword = ({
  name,
  disabled = false,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <input
      required
      className="custom-input placeholder-white/50 placeholder:text-sm"
      type="password"
      name={name}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
