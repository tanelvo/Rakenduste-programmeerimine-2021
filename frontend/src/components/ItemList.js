import Item from '../components/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

function ItemList(props) {
    return(
        <>
            <div className="links">
                <Link to="add-item">
                    <button className="addItemButton">Lisa uus ese</button>
                </Link>
                <Link to="Categories">
                    <button className="addItemButton">Kategooriad</button>
                </Link>
            </div>
            <div className="itemBox">
                {props.items.map(item=>(
                <Item 
                    key={item.key} 
                    name={item.name} 
                    price={item.price}  
                    category={item.category} />
                ))}
                
            </div>
        </>
    )
}

export default ItemList;