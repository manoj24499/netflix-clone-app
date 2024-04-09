import "./text.css"
const Text=({heading,content})=>{
    return(
        <div>
            <h1>{heading}</h1>
            <h3>{content}</h3>
        </div>
    )
}
export default Text