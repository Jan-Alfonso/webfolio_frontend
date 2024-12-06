import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import './Loader.css';

function Loader({fadeOut}) {
  useEffect(() => {
    // Using jQuery to remove the "is-loading" class after a timeout
    setTimeout(() => {
      $('#main').removeClass('is-loading');
    }, 100); // Adjust this value if you want a longer or shorter delay
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div id="main" className={`is-loading ${fadeOut ? 'fade-out' : ''}`}>
      <h1>
        JAN MERISS ALFONSO
      </h1>
    </div>
  );
}

export default Loader;