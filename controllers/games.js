const { request, response } = require("express");
const models = require("../models/games");
const pool = require("../db");
const gamesmodel = require("../models/games");

const listGames = async (req = request, res = response) => {
  try {
    const games = await pool.query(models.getAll);
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const createGame = async (req = request, res = response) => {
  const { Console, GameName, Review, Score } = req.body;

  if (!Console || !GameName || !Review || !Score) {
    res.status(400).json({ msg: "Missing information" });
    return;
  }

  try {
    const result = await pool.query(models.addGame, [
      Console,
      GameName,
      Review,
      Score,
    ]);
    res.json({ msg: `Game added successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const updateGame = async (req = request, res = response) => {
  const { Console, GameName, Review, Score } = req.body;
  const { id } = req.params;

  try {
    const result = await pool.query(models.updateGame, [
      Console,
      GameName,
      Review,
      Score,
      id,
    ]);

    if (result.affectedRows === 0) {
      res.status(404).json({ msg: `Game with ID ${id} not found` });
    } else {
      res.json({ msg: "Game updated successfully" });
    }
  } catch (error) {
    console.error("Error updating game:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteGame = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(gamesmodel.deleteGameById, [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ msg: `Game with ID ${id} not found` });
    } else {
      res.json({ msg: "Game deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting game:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  listGames,
  createGame,
  deleteGame,
  updateGame,
};
