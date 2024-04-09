import "./input.css";
const Input = ({ label, color, position, bg, size, content }) => {
  return (
    <div className="input-label">
      <input
        className={`${label || ""} ${bg || ""}  ${size || ""} `}
        id="input"
        type="email"
        placeholder=""
        required
      />
      <label id="label" For="input">
        {content}
      </label>
    </div>
  );
};
export default Input;
