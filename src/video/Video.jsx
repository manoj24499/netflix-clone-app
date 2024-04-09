const Video=({video,src})=>{
    return(
        <div className="video-container" >
            <video autoPlay muted loop className={video}>
                <source src={src} />
            </video>
        </div>
    )
}
export default Video