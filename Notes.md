TODO

[x] Before Base Mode 
    [x] npm install
    [x] npm install pg
    [x] npm install nodemon --global
    [x] add images to public/images folder
    [ ] modify server/modules/gallery.data.js 
        [x] id
            [x] each id is a unique number
        [x] title
        [x] description
        [x] path for
    [x] npm run server
    [x] npm run client

[x] Base Mode
    [x] Create component files
        [x] `GalleryList.js`
        [x] `GalleryItem.js`
    [x] Use axios to create `GET` in `App.js`
    [x] Pass gallery data stored in `App.js` to `GalleryList` via `props`
        [x] iterate over the list of gallery data
        [x] create GalleryItems (objects)
    [x] Pass gallery items to `GalleryItem.js` via `props`
        [x] Update  `GalleryList` to use `GalleryItem` to display an image
        [ ] Swap the image with the description on click
            [x] Use conditional rendering
            [x] [conditional rendering](https://reactjs.org/docs/conditional-rendering.html.
        [x] Display the number of likes for each item 
            [x] include a 'like' button
        [x] On 'like' button click
            [ ] use Axios to updte `PUT` with the 'like' count
            [x] `/gallery/like/:id`
            [x] Update the gallery every time the like button is clicked
