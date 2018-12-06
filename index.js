const express = require("express");
const path = require("path");
const twitter = require("twitter"),
  config = require("./twitterConfig");

const app = express();

const T = new twitter(config);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// An api endpoint that returns a short list of items
app.get("/api/twitterFeeds", (req, res) => {
  // Set up your search parameters
  var params = {
    q: req.query.search,
    count: 10,
    result_type: "recent",
    lang: "en"
  };

  // Initiate your search using the above paramaters
  T.get("search/tweets", params, function(err, data, response) {
    // If there is no error, proceed
    if (!err) {
      res.json(data);
    } else {
      console.log("twitter err", err);
    }
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
