import "./banner.css";
const Banner = ({ img, video, vidSize, imgSize }) => {
  return (
    <div>
      {video && (
        <video className={vidSize} autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {img && <img className={imgSize} src={img} />}
    </div>
  );
};
export default Banner;
