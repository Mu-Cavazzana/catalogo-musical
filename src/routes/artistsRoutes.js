const express = require('express');
const router = express.Router();
const { listArtistas, adicionarArtista, adicionarArtistaForm, deleteArtista, editArtistaForm, editArtista } = require('../controllers/artistController');

router.get('/', listArtistas);
router.get('/add', adicionarArtistaForm);
router.post('/add', adicionarArtista);
router.post('/delete/:id', deleteArtista);
router.get('/edit/:id', editArtistaForm); 
router.post('/edit/:id', editArtista);    

module.exports = router;
