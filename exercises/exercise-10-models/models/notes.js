var mongoose = require('mongoose'); // panggil modul mongoose
var noteSchema = mongoose.Schema({  // Buat skema koleksi
  title : String,
  body : String,
});
mongoose.model('Note', noteSchema); // Inisiasi skema koleksi
var notesModel = mongoose.model('Note'); // Bungkus modelnya agar siap pakai

exports.create = function(obj, cb) {
  return notesModel.create({  // Menyimpan objek baru
    title : obj.title,
    body : obj.body,
  }, function(err, result){
    return cb();
  })
}

exports.update = function(id, obj, cb) {
  return notesModel.findById(id, function(err, note) {  // Ambil dokumen dengan id tertentu
    note.update({     // Lalu update
      title : obj.title,
      body : obj.body,
    }, function(err){
     notesModel.findById(id, function(err, note) {
      return cb(null, note);
     })
    })
  })
}

exports.read = function(id, cb) {
  return notesModel.findById(id, function(err, result){ // Ambil dokumen dengan id tertentu
    return cb(null, result);
  });
}

exports.list = function(cb) {
  notesModel.find({}, function(err, result){ // Ambil semua dokumen
    return cb(null, result);
  });
}

exports.destroy = function(id, cb) {
  return notesModel.remove({_id: id}, function(err) {  // Hapus dokumen dengan id tertentu
    return cb(null);
  })
}
