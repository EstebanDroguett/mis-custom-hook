import { useState } from 'react';

export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState ); //Sirve para no dejar contenido en el imputo al agregar un texto.
    }

    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
}
