import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({item, markLiked, fetchGallery, markIsClickedTrue, markIsClickedFalse}) {
    console.log('item is:', item);
    console.log('description is:', item.description);

    const renderImage = <img 
                            className="image" 
                            src={item.path} 
                            onClick={() => {markItemIsClickedTrue(item)}}
                        />;
    const renderText = <p 
                            className="text" 
                            onClick={() => {markItemIsClickedFalse(item)}}
                        >
                            {item.description}
                        </p>;


    const [likesCount, setLikesCount] = useState(item.likes); 
    const [display, setDisplay] = useState(renderImage);
    const [isClicked, setIsClicked] = useState(item.isClicked);
   

    const markItemLiked = (item) => {
        console.log('inside markItemLiked');
        markLiked(item.id);
        setLikesCount(item.likes);
        fetchGallery();
    }


    const markItemIsClickedTrue = (item) => {
        console.log('inside markItemClickedTrue');
        markIsClickedTrue(item.id);
        setIsClicked(item.isClicked);
        setDisplayValue();
        fetchGallery();
    }

    
    const markItemIsClickedFalse = (item) => {
        console.log('markItemClickedFalse');
        markIsClickedFalse(item.id);
        setIsClicked(item.isClicked);
        setDisplayValue();
        fetchGallery();
    }

    const setDisplayValue = (item) => {
        if (isClicked===false) {
            setDisplay(renderImage);
        }
        else if (isClicked===true) {
            setDisplay(renderText);
        }
    }

  

    return(
        <>
            <div className='picsList-item'>
                <div>
                    {display}
                </div>
                <div>
                    <button className="likeButton" onClick={() => {markItemLiked(item)}}>👍</button>
                    Likes: {item.likes}
                </div>
            </div>
        </>
        
    )
}

export default GalleryItem;