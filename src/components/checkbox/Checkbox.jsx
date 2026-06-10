function Checkbox({ onChange, className, ariaLabel }) {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      className={className}
      aria-label={ariaLabel}
    />
  );
}

export default Checkbox;
