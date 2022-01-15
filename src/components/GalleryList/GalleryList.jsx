import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({list, markLiked, fetchGallery}) {

    return(
        <div className='pics-list'>
            {list.map((item) => (
                <GalleryItem
                    key={item.id}
                    item={item}
                    markLiked={markLiked}
                    fetchGallery={fetchGallery}
                />
            ))}
        </div>
    )

}

export default GalleryList;