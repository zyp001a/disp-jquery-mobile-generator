var express = require('express');
var bodyParser = require('body-parser');
global.app = express();

var path = require('path'),
    http = require('http');


app.set('port', ^^=port$$);
app.use(bodyParser({limit: '500mb'}));
app.use(express.static(path.join(__dirname, '../client')));


var userServer = require("./user/mongo-http");
userServer.start(app);
//require("./user2/mongo-http").start(app);
app.post("/sign", function(req, res){
	var info = req.body;
	console.log(info);
	if(info.MAC && info.IMSI){
		userServer.dbObj.upsert("user", {MAC: info.MAC, IMSI: info.IMSI}, info, function(item){
			console.log(item);
			if(item){
				res.send({
					id: item._id.toString(),
					token: ""
				});
			}
			else{
				res.send({error:"no item, db error"});
			}
		});
	}
	else{
		res.send({error:"no identity"});
	}
	
});
http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});

