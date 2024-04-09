import "./content.css"
const Content=({content,size,color})=>{
    return(
        <div className="content-container">
            <h3 className={`${size} || ${color}`}>{content}</h3>
        </div>
    )
}
export default Content
