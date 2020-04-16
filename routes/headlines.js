var express = require("express");
var app = express();
app.set("view engine", "ejs");
const router = express.Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("3be98b3db40d41a28a9b408dbd2c5bef");

router.get("/", function (req, res) {
  newsapi.v2
    .topHeadlines({
      q: "toronto",
      language: "en",
      country: "ca",
    })
    .then((response) => {
      const articles = response.articles;
      const length = articles.length;
      const titles = [];
      const urls = [];

      // add the titles to the empty array
      for (i = 0; i < length; i++) {
        titles.push(articles[i].title);
        urls.push(articles[i].url);
      }
      // console.log(titles);
      // console.log(urls);
      res.render("search", {
        data: {
          searchQuery: req.params.search,
          results: {
            articleTitles: titles,
            articleLinks: urls,
          },
        },
      });
    });
});

module.exports = router;
