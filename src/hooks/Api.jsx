import { useEffect, useState } from "react"

const API_KEY = 'AIzaSyAk2XXp6cZJbKdJXoxc0Euw7Qf7feLXZG4';


const useApi = function() {
    const [data, setData] = useState();
    

    // const url = `https://classroom.googleapis.com/v1/courses?key=${API_KEY}`;
    // const url = `https://api.schoology.com/v1/courses`;
    const url = ` https://api.rise.com/courses`;
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return data;
}


export default useApi;

/**
 * root endpoint: 'https://www.udemy.com/api-2.0/'
 */