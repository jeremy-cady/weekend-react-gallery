const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE


// GET route
router.get('/', (req, res) => {
    const queryText=`
        SELECT * FROM "gallery"
        `;

    pool.query(queryText)
        .then((result) => {
            console.log('data from DB is:', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('DB query error', error);
            res.sendStatus(500);
        })
}) // end GET route



// PUT Route
router.put('/:id', (req, res) => {
    const queryText = `
        UPDATE "gallery"
        SET "likes" = $1
        WHERE "id" = $2
    `;

    const queryParams = [
        req.params.id
    ];

    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('likes increased');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('PUT /gallery error', error);
            
        })
}); // end PUT Route

module.exports = router;