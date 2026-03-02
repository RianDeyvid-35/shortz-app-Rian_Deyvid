var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
  '/',
  function(req, res, next)
  {
  res.render('index', 
    { 
      titulo: 'Bem Vndo', 
      mensagens: 'Vamos homens queimen a vila'
    }
  );
  });



/*router.get('/', nomefuncao);

 function(req, res, next)
  {
  res.render('index', { title: 'Express' });
  }
);

*/
module.exports = router;
