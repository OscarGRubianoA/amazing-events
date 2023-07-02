function Carousel(props) {
    
   
    const range = props.range
    const start =5
    const end = start + props.range
    const items = props.data

    const itemView = (item) => (
        <div className="item">
            <img src={item.url} alt="" />
            <p>{item.title}</p>
        </div>
        )

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