const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/MovieController");

router.get("/", MovieController.listMovies);

router.get("/register", MovieController.registerMovie);
router.post("/register", MovieController.movieCreate);

router.get("/update/:id_movie", MovieController.updateMovie);
router.post("/update", MovieController.movieUpdate)

router.post("/remove", MovieController.removeMovie);

module.exports = router;
