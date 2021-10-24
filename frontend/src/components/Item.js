import './ItemList.css';
function Item(props){
    return(
        <div className="item">
            <h4 className="itemName">{props.name}</h4>
            <div className="itemText">
                <p className="itemPrice">Price: {props.price}</p>
            </div>
            <div className="itemText">
                <p className="itemCategory">Category: {props.category}</p>    
            </div>
            
        </div>
    )
}

export default Item;