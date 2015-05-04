var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var url_openpse = 'http://openpse.com/api/companies/?include_indices=1';
  request(url_openpse, function(err, res2, body){
  	if(err)
  		throw err;
  	if(res2.statusCode == 200){
  		var listing = JSON.parse(body);
  		console.log(listing);
  		res.render('callpse', {title: 'OpenPSE', url: url_openpse, body: listing});
  	}
  });
});

/*router.get('/', function(req, res) {
	res.send('ok');
});*/

module.exports = router;
