let api = require('marvel-api');
 
let marvel = api.createClient({
    publicKey: '070d53274c5466d553aaa96d847131a2'
      , privateKey: '36d5abf5ffc47ed47cea9c2330093be4a78f8750'
});

marvel.characters.findByName('hulk')
  .then(console.log)
    .fail(console.error)
    .done();

marvel.characters.findByName('punisher')
  .then(console.log)
    .fail(console.error)
    .done();
