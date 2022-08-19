const Button = ({
  text = "",
  className = [],
  onMouseEvent = () => {},
  handleCompanyClicked = () => {},
  handleFeaturesClicked = () => {},
}) => {
  const classArr = className.join(" ");
  const handleClick = () => {
    handleCompanyClicked();
    handleFeaturesClicked();
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
