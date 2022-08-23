const Button = ({
  text = "",
  className = [],
  onMouseEvent = () => {},
  handleFeaturesClicked = () => {},
  handleCompanyClicked = () => {},
}) => {
  const classArr = className.join(" ");
  const handleClick = () => {
    handleFeaturesClicked();
    handleCompanyClicked();
  };
  return (
    <button
      onMouseOver={onMouseEvent}
      onMouseLeave={onMouseEvent}
      onClick={handleClick}
      className={classArr}
    >
      {text}
    </button>
  );
};

export default Button;
