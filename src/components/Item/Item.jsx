import { Link } from "react-router-dom"

const Item = ({ item }) => (
    <Link to={`/Detail/${item.id}`} className="list-element">
        <img src={item.image} alt="foto" />
        <div className="list-element-box">
            <span>{item.title}</span>
        </div>
    </Link>
)

export default Item;