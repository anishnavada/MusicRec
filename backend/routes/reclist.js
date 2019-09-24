const router = require('express').Router();
let Reclist = require('../models/reclist.model');

function makelistkey() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 20; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function makesongid() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

router.route('/').get((req, res) => {
  Reclist.find()
    .then(reclists => res.json(reclists))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const listkey = makelistkey();
  var musiclist = [];  

  const newReclist = new Reclist({
    listkey,
    musiclist
  });
  
   newReclist.save()
  .then(() => res.send(listkey))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:key').get((req, res) => {
  Reclist.find({listkey: req.params.key})
    .then(reclist => res.json(reclist))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:key').delete((req, res) => {
  Reclist.deleteOne({listkey: req.params.key})
    .then(reclist => res.json("Reclist Deleted!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deletesong/:key').post((req, res) => {
	Reclist.findOne({listkey: req.params.key})
	 .then(reclist => {
	 	var temp = reclist.musiclist
	 	for (i = 0; i < temp.length; i++) {
  			if (temp[i].id == req.body.id){
  				temp.splice(i,1);
  			}
		}
		reclist.musiclist = temp;
		
		 reclist.save()
        .then(() => res.json('Song Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
	 })
});

router.route('/update/:key').post((req, res) => {
   Reclist.findOne({listkey: req.params.key})
    .then(reclist => {
      var temp = reclist.musiclist;
      req.body.song.id = makesongid();
      temp.push(req.body.song);
      reclist.musiclist = temp;
      
      reclist.save()
        .then(() => res.json('Reclist updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;