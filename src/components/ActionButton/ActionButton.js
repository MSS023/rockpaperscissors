import "./ActionButton.css";

function ActionButton(props) {
  const { src, color1, color2, alt, onClick, className } = props;
  return (
    <>
      <div
        className={"button-background "+className}
        style={{
          ...props.style,
          background: `linear-gradient(${color1},${color2})`,
        }}
      >
        <button onClick={onClick}>
          <img className="button-img" src={src} alt={alt} />
        </button>
      </div>
    </>
  );
}

export default ActionButton;
