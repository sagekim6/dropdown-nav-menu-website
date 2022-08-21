const Button = ({ text = "", className = [], onMouseEvent = () => {} }) => {
  const classArr = className.join(" ");

  return (
    <button
      onMouseOver={onMouseEvent}
      onMouseLeave={onMouseEvent}
      className={classArr}
    >
      {text}
    </button>
  );
};

export default Button;
