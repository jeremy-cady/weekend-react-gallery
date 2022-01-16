import { useState } from 'react';

function GalleryItem({item, markLiked, fetchGallery}) {
    console.log('item is:', item);

    const [likesCount, setLikesCount] = useState(item.likes); 
    const [display, setDisplay] = useState(item.path);

    const markItemLiked = (item) => {
        console.log('inside markItemLiked');
        markLiked(item.id);
        setLikesCount(item.likes);
        fetchGallery();
    }

    return(
        <>
            <div id='picsList-item'>
                <img
                    src={item.path}
                    onClick={() => {setDisplay(item.description)}}    
                />

            </div>
            <div>
                <button onClick={() => {markItemLiked(item)}}>👍</button>
                Likes: {item.likes}
            </div>
        </>
        
    )
}

export default GalleryItem;