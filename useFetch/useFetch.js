import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });// Sirve para hacer un loading funcional.

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null }); //Sirve para que vuelva a mostrar el loading al cambiar al siguiente arreglo de la api.

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no definido');
                }
            });
            
    }, [url]);

    return state;
}
