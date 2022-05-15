import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        
        const { data } = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_ENGINE_KEY}&`,
          {
            params: {
              q: type,
            },
          }
        );
        setResults(data);
        setIsLoading(false);
    };

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);