var mongoose = require('mongoose'); // panggil modul mongoose
var noteSchema = mongoose.Schema({  // Buat skema koleksi
  title : String,
  body : String,
});
mongoose.model('Note', noteSchema); // Inisiasi skema koleksi
var notesModel = mongoose.model('Note'); // Bungkus modelnya agar siap pakai

exports.create = function(obj, cb) {
  // TODO Menyimpan objek baru
}

exports.update = function(id, obj, cb) {
  // TODO Update dokumen, lalu kembalikan dokumen yang terupdate
}

exports.read = function(id, cb) {
  // TODO Ambil dokumen dengan id tertentu
}

exports.list = function(cb) {
  // TODO Ambil semua dokumen
}

exports.destroy = function(id, cb) {
  // TODO Hapus dokumen dengan id tertentu
}
