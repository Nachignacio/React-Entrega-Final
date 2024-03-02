import { Link } from "react-router-dom";
import "../styles/components/ListItem.css"

function ListItem({texto}){

    return(
        <div>
        <li >
            <Link to={`/category/${texto}`}>
                {texto}
            </Link>
        </li>
        </div>
    )
}

export default ListItem;