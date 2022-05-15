import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import {useResultContext} from '../contexts/ResultContextProvider';
import {Loading} from './Loading';

export const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm !== ''){
      if(location.pathname === '/videos') {
        getResults(`q=${searchTerm} videos`);
      } else if(location.pathname === '/news') {
        getResults(`q=${searchTerm} news`);
      } else {
        getResults(`/${location.pathname}/q=${searchTerm}`);
      }
    }
  }, [searchTerm, location.pathname]);

  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div>
          <p className="text-sm">
            About {results.searchInformation?.formattedTotalResults} results
            ({results.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
          </p>
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            {results.items?.map(item => (
              <div key={item.formattedUrl} className="md: w-2/5 w-full">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="h-5 aspect-auto"
                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                        alt="Featured Visual" 
                      />
                    )
                  }
                  <p className="text-sm">
                    {item.displayLink}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {item.title}
                  </p>
                  <p className="text-sm">
                    {item.snippet}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    case '/images':
      return (
        <div>
          <p className="text-sm">
            About {results.searchInformation?.formattedTotalResults} results
            ({results.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
          </p>
          <div className="grid gap-3 grid-cols-4 items-center justify-center">
            {results.items?.map(item => (
              <div key={item.formattedUrl} className="md: w-2/5 w-full">
                <a href={item.link} target="_blank" rel="noreferrer" className="sm:p3 p-5">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="w-40 aspect-auto"
                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                        alt="Featured Visual"
                        loading="lazy"
                      />
                    )
                  }
                  <p className="sm:w-36 w-36 break-words text-sm mt-2">
                    {item.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      );
      case '/news':
        return (
          <div>
            <p className="text-sm">
              About {results.searchInformation?.formattedTotalResults} results
              ({results.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
            </p>
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
              {results.items?.map(item => (
                <div key={item.formattedUrl} className="md: w-2/5 w-full">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="h-5 aspect-auto"
                          src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                          alt="Featured Visual" 
                        />
                      )
                    }
                    <p className="text-sm">
                      {item.displayLink}
                    </p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                      {item.title}
                    </p>
                    <p className="text-sm">
                      {item.snippet}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case '/videos':
        return (
          <div>
            <p className="text-sm">
              About {results.searchInformation?.formattedTotalResults} results
              ({results.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
            </p>
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
              {results.items?.map(item => (
                <div key={item.formattedUrl} className="md: w-2/5 w-full">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="h-5 aspect-auto"
                          src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                          alt="Featured Visual" 
                        />
                      )
                    }
                    <p className="text-sm">
                      {item.displayLink}
                    </p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                      {item.title}
                    </p>
                    <p className="text-sm">
                      {item.snippet}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
    default:
      return "Error...";
  }
};