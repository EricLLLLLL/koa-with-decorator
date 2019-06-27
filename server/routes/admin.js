const { controller, get, required } = require("../lib/decorator");

const movies = [{ title: "蜘蛛侠", id: "111" }, { title: "复联", id: "222" }];
@controller("/admin")
export class adminController {
  @get("/movie/list")
  async getMovieList(ctx, next) {
    ctx.body = {
      success: true,
      data: movies
    };
  }

  @get("/movies")
  @required({
    query: ["id"]
  })
  async getById(ctx, next) {
    const id = ctx.query.id;
    const movie = movies.filter(item => item.id === id);
    ctx.body = {
      data: movie,
      success: true
    };
  }
}
