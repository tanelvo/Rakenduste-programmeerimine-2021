import Item from '../components/Item';

function ItemList(props) {
    return(
        <div>
            {props.items.map(item=>(
            <Item 
                key={item.key} 
                name={item.name} 
                price={item.price}  
                category={item.category} />
            ))}
            
        </div>
    )
}

export default ItemList;