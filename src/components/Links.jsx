import React from 'react';
import {NavLink} from 'react-router-dom';

const links = [
    {url: '/search', text: "🔍All"},
    {url: '/images', text: "📷Images"},
    {url: '/videos', text: "📺Videos"},
    {url: '/news', text: "📰News"}
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({url, text}) => (
            <NavLink key={url} to={url} className="m-2 mb-0 hover:text-blue-500 hover:border-b-2 focus:text-blue-500 focus:border-b-2 active:text-blue-900 dark:focus:text-blue-300 dark:hover:text-blue-300 dark:active:text-blue-500 pb-2">
                {text}
            </NavLink>
        ))}
    </div>
  );
};
