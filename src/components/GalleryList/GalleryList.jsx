import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({list, markLiked, fetchGallery, markIsClickedTrue, markIsClickedFalse}) {

    return(
        <div className='pics-list'>
            {list.map((item) => (
                <GalleryItem
                    key={item.id}
                    item={item}
                    markLiked={markLiked}
                    fetchGallery={fetchGallery}
                    markIsClickedTrue={markIsClickedTrue}
                    markIsClickedFalse={markIsClickedFalse}
                />
            ))}
        </div>
    )

}

export default GalleryList;