import { useState } from "react";

export const SearchResultScreen = ({route, navigation}) => {
    const {query} = route.params;
    const [resutls, setResults] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            // Filter products
        })
        .catch(error => console.error(error));
    }, []);

}