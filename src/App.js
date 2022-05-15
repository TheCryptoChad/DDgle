import React, {useState} from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {RoutesC} from './components/RoutesC';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <RoutesC />
          <Footer />
        </div>
    </div>
  );
};

export default App;