// ===============================================================================
// ROUTING
// ===============================================================================

var friendsList = require("../data/friends.js");


module.exports = function(app){
    //Display API for All Friends
    app.get("/api/friends_list", function(req, res) {
        return res.json(friendsList); 
    });
    //Display waitinglist API
    app.post("/api/friends_list", function(req, res) {
        
        var name = req.body.name;
        var photo = req.body.pic_url;
        var user_scores = [];
        for (var k=0; k< (req.body.scores).length; k++) {
            user_scores.push(parseInt(req.body.scores[k]));
        }
        var new_obj = {
            name: name,
            pic_url:photo,
            scores: user_scores
        }
        friendsList.push(new_obj);
        //console.log(new_obj);
        console.log(friendsList);
    });
};