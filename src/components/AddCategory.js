import React, { useState } from 'react' //rafc para category
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    //La caja de texto debe tener un tipo de estado pq necesito saber qué es lo que está escribiendo
    const [inputValue, setinputValue] = useState('');
    const handleInputChange=(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
            if(inputValue.trim().length>2){
                setCategories( cats =>[inputValue, ...cats,]);
                setinputValue('');
            }
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes={ //mi definicion del proptypes
    setCategories: PropTypes.func.isRequired
}