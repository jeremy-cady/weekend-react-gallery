CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR (250),
    "description" VARCHAR (250),
    "likes" INTEGER,
    "isClicked" BOOLEAN DEFAULT FALSE
);


INSERT INTO "gallery" (
    "path",
    "description",
    "likes"
)
VALUES 
    ('/images/centralPark.jpg', 'pics of my fav city...New York. This is a fountain in the middle of the park.', 0 ),
    ('/images/centralParkFlower.jpg', 'pics of my fav city...New York. A flower in Central Park in spring.', 0),
    ('/images/dogIsMyCopilot.jpg', 'pic of my fav doggo. Her name was Mina.', 0),
    ('/images/ellisIsland.jpg', 'pic of my fav city...New York. Ellis Island is fascinating', 0),
    ('/images/goat_small.jpg', 'pic of a rando goat. He looks sad.', 0),
    ('/images/lombardisPizza.jpg', `pic from my fav city...New York. My fav pizza...Lombardi's. Also the oldest pizzeria in the U.S.`, 0)
    ('/images/newYorkHotel.jpg', 'pic from my fav city...New York. Beautiful hotel.', 0);