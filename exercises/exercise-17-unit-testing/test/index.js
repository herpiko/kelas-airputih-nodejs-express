var app = require(__dirname + '/../index'); // Panggil instance dari aplikasi
var supertest = require('supertest');  // Pustaka untuk request http
var should = require('should'); // Pustaka untuk assertion
describe('Unit Test, dong', function() {
  describe('Just try', function() {
    it('should be true', function(done) {
      var x = true;
      x.should.equal(true);
      done();
    });
  });
  describe('Test the web', function() {
    it('should be able to login', function(done) {
      supertest(app)  // Request diinject ke app
      .post('/dologin')
      .type('form')
      .send({username : 'admin', password : 'admin'})
      .then(function(res){
        res.text.should.be.equal('Found. Redirecting to /');
        done();
      });
    });
    it('should be able to list notes', function(done) {
      supertest(app)
      .get('/')
      .set('Content-Type', 'application/json')
      .then(function(res){
        var json = JSON.parse(res.text);
        json.length.should.greaterThan(0);
        json[0].title.length.should.greaterThan(0);
        done();
      });
    });
    it('should be able to list notes, more than 1000', function(done) {
      supertest(app)
      .get('/')
      .set('Content-Type', 'application/json')
      .then(function(res){
        var json = JSON.parse(res.text);
        json.length.should.greaterThan(1000);
        done();
      });
    });
  });
});
