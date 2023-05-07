function Carousel() {
    const items = [{
        url: "",
        title: "ferias"
    }, {
        url: "",
        title: "Museos"
    }, {
        url: "",
        title: "Disfraces"
    }, {
        url: "",
        title: "Cines"
    }]
    const itemView = (item) => {
    <div className="item">
        <img src="..." />
        <p>{item.title}</p>
    </div>
    }
    return (
        <div >
            <div className="slide">

                {
                items.map(item => itemView(item))
                }
            </div>
            

        </div>
    )
}
export default Carousel