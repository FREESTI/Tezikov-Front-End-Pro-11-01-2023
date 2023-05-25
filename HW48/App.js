import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';


const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
