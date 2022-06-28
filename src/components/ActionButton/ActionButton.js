import "./ActionButton.css";

function ActionButton(props) {
  const { src, color1, color2, alt } = props;
  return (
    <>
      <div
        className="button-background"
        style={{
          ...props.style,
          background: `linear-gradient(${color1},${color2})`,
        }}
      >
        <button>
          <img className="button-img" src={src} alt={alt} />
        </button>
      </div>
    </>
  );
}

export default ActionButton;
