import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({galleryItems, onLike}) {

    return(
        <div className='pics-list'>
            {galleryItems.map((item) => (
                <GalleryItem
                    key={item.id}
                    item={item}
                    onLike={onLike}
                />
            ))}
        </div>
    )

}

export default GalleryList;