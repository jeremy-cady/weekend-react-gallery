function GalleryItem({item, onLike}) {
    console.log('item is:', item);

    return(
        <>
            <div id='picsList-item'>
                <img
                    src={item.path}    
                />

            </div>
        </>
        
    )
}

export default GalleryItem;