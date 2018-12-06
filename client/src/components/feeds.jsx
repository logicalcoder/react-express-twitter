import React from "react";

// Stateless functional component
const Feeds = ({ feeds }) => {
  console.log("feeds", feeds);

  if (feeds && feeds.length > 0) {
    return (
      <div>
        {feeds.map(item => {
          let tweet = item;
          if (item.retweeted_status) {
            tweet = item.retweeted_status;
          }

          return (
            <div className="card m-2" key={item.id}>
              <div className="card-header">
                {" "}
                <img
                  src={tweet.user.profile_image_url}
                  alt={tweet.user.name}
                />{" "}
                {tweet.user.name}{" "}
                <span className="badge badge-info">
                  @{tweet.user.screen_name}
                </span>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{tweet.text}</p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">
                      <a
                        href={
                          tweet.entities.urls[tweet.entities.urls.length - 1]
                            .url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        read more...
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        Please use the search at the top to find the feeds you're looking for.
      </div>
    );
  }
};

export default Feeds;
