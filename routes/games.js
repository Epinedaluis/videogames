const express = require('express');
const router = express.Router();
const {
  listGames,  
  createGame,
  deleteGame,
updateGame
  
} = require('../controllers/games'); // Importa los controladores de juegos

router.get('/', listGames); // Listar todos los juegos
router.post('/', createGame); // Crear un nuevo juego
router.put('/:id', updateGame); // Actualizar un juego por ID
router.delete('/:id', deleteGame); // Eliminar un juego por ID



module.exports = router;
