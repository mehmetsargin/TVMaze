import { useState, createContext, useContext } from "react";


const SearchMovieContext = createContext();

const SearchMovieProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const searchTextTrim = searchText?.trim();

    const handleClick = () => {
        console.log(searchTextTrim)
    };

    const values = {
        setSearchText,
        handleClick,
        searchTextTrim
    };

    return (
        <SearchMovieContext.Provider value={values}>{children}</SearchMovieContext.Provider>
    );
}

const useSearchMovie = () => useContext(SearchMovieContext);

export { SearchMovieProvider, useSearchMovie }