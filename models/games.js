const gamesmodel = {
  // Consulta para obtener todos los juegos
  getAll: `
    SELECT
      *
    FROM
      games
  `,

  // Consulta para insertar un nuevo juego
  addGame: `
    INSERT INTO
      games (Console, GameName, Review, Score)
    VALUES
      (?, ?, ?, ?)
  `,

  // Consulta para actualizar un juego por ID
  updateGame: 
  
  `UPDATE
   games
    SET
     Console = ?,
      GameName = ?,
       Review = ?,
        Score = ?
         WHERE id = ?`

  ,

  // Consulta para eliminar un juego por ID (marcar como inactivo)
  getGameById: `
    SELECT
      *
    FROM
      games
    WHERE
      id = ?
  `,


};

module.exports = gamesmodel;
