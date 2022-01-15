import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({list, onLike}) {

    return(
        <div className='pics-list'>
            {list.map((item) => (
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