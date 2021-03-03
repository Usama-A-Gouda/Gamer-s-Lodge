const express = require('express');
const router = express.Router();
const axios = require('axios').default;
//change uplay .
const url = 'https://public-api.tracker.gg/v2/division-2/standard/profile/' ; 

const bodyParser = require('body-parser');

router.get('/search',(req,res)=>{
    res.render('./div2/search-player');
});
router.post('/search/stats',(req,res)=> {


    const platform = req.body.platform ;
    const playerName = req.body.playerName ;
    console.log(platform);
    
    axios.get(url + platform + '/' + playerName + '/', {
        headers : {
            'TRN-Api-Key': 'edb321c9-05db-4c9e-b388-88398649ba10',
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip'
                    }
    })

    .then(response=> {
        
        //console.log(response.data.data.segments[0].stats);
        if (response) {
            res.render('./div2/playerState', {playerData:response.data.data.segments[0].stats
                ,playerInfo:response.data.data.platformInfo 
                , playerAvatar : response.data.data.platformInfo.avatarUrl});
        }
        res.render("err");
     
    })
    .catch(err=> {
        res.render("err");
    })

})


module.exports = router;