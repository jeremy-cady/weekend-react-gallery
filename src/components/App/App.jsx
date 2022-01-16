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
    });
  }


  const markLiked = (id) => {
    console.log('in markLiked');

    axios({
      method: 'PUT',
      url: `/gallery/likes/${id}`
    }).then(response => {
      console.log('PUT /gallery/likes success!', response);
      fetchGallery();
    }).catch((error) => {
      console.log('PUT /gallery error', error);
    });
  }



  const markIsClickedTrue = (id) => {
    console.log('in markIsClickedTrue');

    axios({
      method: 'PUT',
      url: `/gallery/isClickedTrue/${id}`
    }).then(response => {
      console.log('PUT /gallery/isClickedTrue success!', response);
      fetchGallery();
    }).catch((error) => {
      console.log('PUT /gallery/isClickedTrue error', error);
    });
  }



  const markIsClickedFalse = (id) => {
    console.log('in markIsClickedFalse');

    axios({
      method: 'PUT',
      url: `/gallery/isClickedFalse/${id}`
    }).then(response => {
      console.log('PUT /gallery/isClickedFalse success!', response);
      fetchGallery();
    }).catch((error) => {
      console.log('PUT /gallery/isClickedFalse error', error);
    });
  }


    return (
      <div className="App">
        <Header/>
        <GalleryList
          list={galleryList}  
          fetchGallery={fetchGallery}
          markLiked={markLiked}
          markIsClickedTrue={markIsClickedTrue}
          markIsClickedFalse={markIsClickedFalse}
        />
      </div>
    );
}

export default App;
