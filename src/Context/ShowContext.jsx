import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let ShowContext = createContext(0);



export default function ShowContextProvider(props) {

    const [results, setResults] = useState([]);





    async function getTopRated() {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)

            console.log(data.results);
            setResults(data.results)

        } catch (error) {
            console.log(error);

        }


    }





    return <ShowContext.Provider value={{ results, getTopRated }}>
        {props.children}

    </ShowContext.Provider>
}
