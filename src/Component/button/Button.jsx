import "./button.css";

const Button = ({ content, button, size, svg }) => {
  return (
    <div>
      <button className={`${button || ""} ${size || ""}`}>
        {content} {svg}
      </button>
    </div>
  );
};
export default Button;
