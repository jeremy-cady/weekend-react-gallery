import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    console.log('in fetchGallery');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('response is:', response);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery failed', error);
    })
  }





  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
