function Button({ text, onClick, className, ariaLabel }) {
  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {text}
    </button>
  );
}

export default Button;
