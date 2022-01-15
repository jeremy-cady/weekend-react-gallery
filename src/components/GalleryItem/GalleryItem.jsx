import { useState } from 'react';

function GalleryItem({item, markLiked, fetchGallery}) {
    console.log('item is:', item);

    let likesCount = 0;

    const [isLiked, setIsLiked] = useState(item.likes); 

    const markItemLiked = (item) => {
        console.log('inside markItemLiked');
        markLiked(item.id);
        setIsLiked(likesCount++);
        fetchGallery();
    }

    return(
        <>
            <div id='picsList-item'>
                <img
                    src={item.path}    
                />

            </div>
            <div>
                <button onClick={() => {markItemLiked(item)}}>👍</button>
                Likes: {likesCount}
            </div>
        </>
        
    )
}

export default GalleryItem;