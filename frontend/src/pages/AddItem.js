import AddItemForm from '../components/AddItemForm'

function AddItem(){
    function itemSubmitHandler(item){
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'Application/json'}
        });
    }
    return (
        <div>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    );
}

export default AddItem;