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
  // TODO : unit testing for login and note list
  describe('Test the web', function() {
    it('should be able to login', function(done) {
    });
    it('should be able to list notes', function(done) {
    });
    it('should be able to list notes, more than 1000', function(done) {
    });
  });
});
