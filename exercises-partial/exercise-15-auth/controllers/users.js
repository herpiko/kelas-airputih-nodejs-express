var usersModel = require('../models/users');

exports.add = function(req, res, next) {
    res.render('useredit', {
        title: "Add a user",
        docreate: true,
        userId: "",
        user: undefined,
        session: req.session
    });
}

exports.save = function(req, res, next) {
    console.log(req.body);
    var obj = {
      username : req.body.username,
      password : req.body.password,
    }
    if (req.body.docreate === "create") {
      console.log(obj);
      usersModel.create(obj, function(err){
        if (err) return res.send(err);
        res.redirect('/users');
      });
    } else {
      usersModel.update(req.body.id, obj, function(err){
        // handle err
        if (err) return res.send(err);
        res.redirect('/userview/' + req.body.id);
      })
    }
}

exports.list = function(req, res, next) {
  usersModel.list({}, function(err, users) {
    if (err) return res.send(err);
    res.render('users', {
        title: 'Users',
        users: users,
        session : req.session,
    });
  })
}

exports.view = function(req, res, next) {
    if (req.params.id) {
      usersModel.read(req.params.id, function(err, user){
        if (err) return res.send(err);
        res.render('userview', {
            title: user.username,
            user: user,
            session : req.session,
        });
      });
    }
}

exports.edit = function(req, res, next) {
  if (req.params.id) {
    usersModel.read(req.params.id, function(err, user){
      if (err) return res.send(err);
      res.render('useredit', {
        title: user ? ("Edit " + user.username) : "Add a user",
        docreate: user ? false : true,
        userId: req.params.id,
        user: user,
        session : req.session,
      });
    });
  }
}

exports.destroy = function(req, res, next) {
  usersModel.read(req.params.id, function(err, user) {
    if (err) return res.send(err);
    res.render('userdestroy', {
        title: user ? user.username : "",
        userId: req.params.id,
        user: user,
        session : req.session,
    });
  });
}

exports.dodestroy = function(req, res, next) {
  usersModel.destroy(req.body.id, function(err){
    if (err) return res.send(err);
    res.redirect('/users');
  });
}


// Auth
exports.login = function(req, res, next) { // Ke halaman login
  // TODO render login
}
exports.dologin = function(req, res, next) {
  // TODO check use pass
}

exports.logout = function(req, res, next) {  // Logout
  // TODO logout
}
