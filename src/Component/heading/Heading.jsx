import "./heading.css";
const Heading = ({ size, font, color, border, title }) => {
  return (
    <div className="heading">
      <h1
        className={`${size || ""} ${color || ""} ${font || ""}${border || ""}`}
      >
        {title}
      </h1>
    </div>
  );
};
export default Heading;
