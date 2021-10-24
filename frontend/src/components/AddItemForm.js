import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props){
    const nameInputRef= useRef(); 
    const priceInputRef= useRef(); 
    const categoryInputRef= useRef(); 

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("Vormi sisestus õnnestus!");
        console.log(nameInputRef.current.value);
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item={
            name: nameValue,
            price: priceValue,
            category: categoryValue
        };
        props.onAddItem(item);
    }
    return (
        <div className="formDiv">
            <form onSubmit={formSubmitHandler}>
                <h1>Lisa uus ese</h1>
                <label>Eseme nimi:</label><br/>
                <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br/>
                <label>Eseme hind:</label><br/>
                <input type="number" placeholder="Hind" required ref={priceInputRef}/><br/>
                <label>Eseme kategooria:</label><br/>
                <input type="text" placeholder="Kategooria" required ref={categoryInputRef}/><br/>
                <button className="formSubmit">Sisesta uus ese</button>
            </form>
        </div>
    );
}

export default AddItemForm;