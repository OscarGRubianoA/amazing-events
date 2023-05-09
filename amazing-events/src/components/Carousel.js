function Carousel(props) {
    
    const itemView = (item) => (
    <div className="item">
        <img src={item.url} alt="" />
        <p>{item.title}</p>
    </div>
    )
    const range = props.range
    const start = 0
    const end = start + props.range
    const items = props.data
    return (
        <div>
            <div className="slide">

                {
                items.slice(start,end).map(itemView)
                }
            </div>
            

        </div>
    )
   
}
export default Carousel