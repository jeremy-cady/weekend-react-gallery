import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header'

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
        <Header/>
        <GalleryList
          list={galleryList}  
          fetchGallery={fetchGallery}
        />
      </div>
    );
}

export default App;
