import { useState } from 'react';

function GalleryItem({item, markLiked, fetchGallery, markIsClickedTrue, markIsClickedFalse}) {
    console.log('item is:', item);
    console.log('description is:', item.description);

    const [likesCount, setLikesCount] = useState(item.likes); 
    const [display, setDisplay] = useState(<img src={item.path} onClick={() => {markItemIsClickedTrue(item)}}/>);
   

    const markItemLiked = (item) => {
        console.log('inside markItemLiked');
        markLiked(item.id);
        setLikesCount(item.likes);
        fetchGallery();
    }


    const markItemIsClickedTrue = (item) => {
        console.log('inside markItemClickedTrue');
        markIsClickedTrue(item.id);
        setDisplay(<p onClick={() => {markItemIsClickedFalse(item)}}>{item.description}</p>);
        fetchGallery();
    }

    
    const markItemIsClickedFalse = (item) => {
        console.log('markItemClickedFalse');
        setDisplay(<img src={item.path} onClick={() => {markItemIsClickedTrue(item)}}/>)
        markIsClickedFalse(item.id);
        fetchGallery();
    }

  

    return(
        <>
            <div id='picsList-item'>
                {display}
            </div>
            <div>
                <button onClick={() => {markItemLiked(item)}}>👍</button>
                Likes: {item.likes}
            </div>
        </>
        
    )
}

export default GalleryItem;