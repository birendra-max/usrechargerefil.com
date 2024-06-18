import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import InternetError from './components/InternetError';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {!isOnline ? (
        <div style={{ color: 'red' }}><InternetError /></div>
      ) : (
        <>
          <Nav />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

