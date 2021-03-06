require('./db'); // Inisiasi db
var express = require('express'); // panggil modul express
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); // Inisiasi express

// Setel render engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setel body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public'))); // Ekpos berkas statis dari direktori public

var notes = require('./controllers/notes'); // Panggil kontroler

// Router
app.get('/', notes.list);
app.get('/noteadd', notes.add);
app.post('/notesave', notes.save);
app.get('/noteview/:id', notes.view);
app.get('/noteedit/:id', notes.edit);
app.get('/notedestroy/:id', notes.destroy);
app.post('/notedodestroy', notes.dodestroy);

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
