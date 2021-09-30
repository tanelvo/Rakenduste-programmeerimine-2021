import Category from "./Category";

function Categorylist(props) {
    return(
    <div>
        {props.categories.map(category=>(
        <Category
            key={category.key}
            name={category.name}
            type={category.type} />
        ))}
    </div>
    )
}

export default Categorylist;