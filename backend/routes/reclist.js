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
  .then(() => res.json('New Music Reccomendation List!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;