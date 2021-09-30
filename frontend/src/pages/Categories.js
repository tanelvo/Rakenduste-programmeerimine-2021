import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Categorylist from '../components/CategoryList';

function Category (){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);
    useEffect(()=>{

    },[])
    fetch('http://localhost:8080/categories').then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        setIsLoading(false);
        setLoadedCategories(data);
    });

    if (isLoading){
        return (<div>Laeb...</div>);
    }

    return(
        <div>
            <Link to="add-category">
                <button>Lisa uus kategooria</button>
            </Link>
            <Categorylist categories={loadedCategories}/>
        </div>
    )
}

export default Category;