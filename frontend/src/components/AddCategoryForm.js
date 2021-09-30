import './AddItemForm.css';
import { useRef } from 'react';

function AddCategoryForm(props){
    const nameInputRef= useRef();
    const typeInputRef= useRef();

    function categorySubmitHandler(e){
        e.preventDefault();
        console.log("Vormi sisestus õnnestus!")
        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;

        const category={
            name: nameValue,
            type: typeValue
        };
        props.onAddCategory(category);
        console.log(category);
    }
    return(
        <form onSubmit={categorySubmitHandler}>
            <label>Kategooria nimi:</label><br/>
            <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br/>
            <label>Kategooria tüüp:</label><br/>
            <select required ref={typeInputRef}>
                <option>PREMIUM</option>
                <option>DELUXE</option>
                <option>BASIC</option>
            </select><br/><br/>
            <button>Sisesta uus kategooria</button>
        </form>
    )
}

export default AddCategoryForm;