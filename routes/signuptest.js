//회원 가입과 관련된 라우팅

module.exports = function(app, User) {

  //Controller 관리
  //var register = require('../../../controllers/auth/register');

  //Common 관리
  //var common = require('../../../controllers/common');


  app.get('/api/users', function(req,res){
    User.find(function(err, users){
      if(err) return res.status(500).send({error: 'db failure'});
      res.json(users);
    })
  });//getall

  app.get('/api/users/:user_id', function(req,res){
    res.end();
  });
  app.get('/api/users/name/:name', function(req,res){
    res.end();
  });

  app.post('/api/users', function(req,res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.pw = req.body.pw;

    user.save(function(err) {
      if(err) {
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({result: 1});
    });
  });//create user

}
