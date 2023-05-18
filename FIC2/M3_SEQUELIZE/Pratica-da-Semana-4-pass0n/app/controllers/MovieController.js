const Movie = require("../models/Movies");

module.exports = class MovieController {
  static registerMovie(_, res) {
    res.render("movies/register");
  }

  static async movieCreate(req, res) {
    const { title, category, genre, synopsis } = req.body;
    const movie = { title, category, genre, synopsis };

    await Movie.create(movie);
    res.status(200).json({ message: "Cadastro realizado com sucesso!" });
  }

  static async listMovies(req, res) {
    const movie = await Movie.findAll({
      raw: true,
    });
    res.render("movies/list", { movie });
  }

  static async updateMovie(req, res) {
    const id_movie = req.params.id_movie;
    const movie = await Movie.findOne({
      where: { id_movie: id_movie },
      raw: true,
    });
    res.render("movies/update", { movie });
  }

  static async movieUpdate(req, res) {
    const { title, category, genre, synopsis } = req.body;
    const movie = { title, category, genre, synopsis };

    const id_movie = req.body.id_movie;

    await Movie.update(movie, {
      where: { id_movie: id_movie },
    });
    res.redirect("/");
  }

  static async removeMovie(req, res) {
    const id_movie = req.body.id_movie;
    await Movie.destroy({
      where: { id_movie: id_movie },
    });
    res.redirect("/");
  }
};
