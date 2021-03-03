const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const url = 'https://api.fortnitetracker.com/v1/profile/';


// router.get('/mohamedSadek', async(req, res) => {
//     axios.get('http://api.mohamed-sadek.com/student/get').
//     then(response => {
//         console.log(response);
//     })

// });
const bodyParser = require('body-parser');

router.get('/search', (req, res) => {
    res.render('./fortnite/search-player');
});
router.post('/search/stats', (req, res) => {
    const platform = req.body.platform;
    const playerName = req.body.playerName;
    console.log(platform);
    //const patform = req.body.platform ;
    //console.log(platform);
    //const url = 'https://api.fortnitetracker.com/v1/profile/' ; 


    axios.get(url + platform + '/' + playerName + '/', {
        headers: {
            'TRN-Api-Key': 'edb321c9-05db-4c9e-b388-88398649ba10'
        }
    })

    .then(response => {

            if (response) {
                console.log(response.data)
                return res.render('./fortnite/playerState', { playerData: response.data });
            }


        })
        .catch(err => {
            res.render("err");
        })



})


module.exports = router;