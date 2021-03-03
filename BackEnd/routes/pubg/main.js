const express = require('express');
const router = express.Router();
const axios = require('axios').default;
let playerId;
const getId = 'https://api.pubg.com/shards/mobile/players?filter[playerNames]=' ; 
let id ;
const getStates = "https://api.pubg.com/shards/psn/players/" + id + "/seasons/lifetime";
const bodyParser = require('body-parser');

router.get('/search',(req,res)=>{
    res.render('./pubg/searchPlayer');
});

router.post('/search/stats',(req,res)=> {
    const playerName = req.body.playerName ;
    const platform   =req.body.platform;
    
    console.log(playerName);

    let getId = 'https://api.pubg.com/shards/' + platform +  '/players?filter[playerNames]=' ; 

    axios.get(getId+playerName , {
        headers : {
            Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1M2UzMTEyMC0yZjhkLTAxMzgtZDI0OS03ZjUyYjk1ODY4MWIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTgxNDg4Mjc0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im9zYW1hb3MxMTMxLWdtIn0.gu_8egy-TANQHU9DwOxZwvlJx8frxzVLzLsyoGZGdNc',
            Accept : 'application/vnd.api+json'
            
        }


    })

    .then(response=> {
        playerId = response.data.data[0].id;
        sendReqByID(playerId,platform,res,playerName);
        //res.render('./fortnite/playerState', {playerData:response.data});
    })
    .catch(err=> {
        res.render("err");

    })
    
})
// to get stats using ID
const sendReqByID = (ID,platform,res,playerName)=> { 

    axios.get('https://api.pubg.com/shards/' + platform + '/players/' + ID + '/seasons/lifetime',{
        headers : {
            Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1M2UzMTEyMC0yZjhkLTAxMzgtZDI0OS03ZjUyYjk1ODY4MWIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTgxNDg4Mjc0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im9zYW1hb3MxMTMxLWdtIn0.gu_8egy-TANQHU9DwOxZwvlJx8frxzVLzLsyoGZGdNc',
            Accept : 'application/vnd.api+json'
            
        }

    })
    .then(response=> {
        let playerState = response.data.data.attributes.gameModeStats;
       
        if (response) {
        res.render('./pubg/playerState', {playerData:playerState , playerName:playerName , playerPlatform:platform});
        }
        res.render("err");

    })
    .catch(err=> {
        res.render("err");
    })

    
};


module.exports = router;