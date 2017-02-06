const FeedParser = require('feedparser');
const request = require('request');

function getFeedItems(resolve, url) {
  const req = request(url);
  const feedparser = new FeedParser();

  req.on('error', function (error) {
    throw new Error(error);
  });

  req.on('response', function (res) {
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    } else {
      this.pipe(feedparser);
    }
  });

  feedparser.on('error', function (error) {
    throw new Error(error);
  });

  const items = [];

  feedparser.on('readable', function () {
    let item;
    while (item = this.read()) {
      items.push(item);
    }
  });

  feedparser.on('end', function() {
    resolve(items);
  });
}

module.exports = function readFead(url) {
  return new Promise((resolve) => {
    getFeedItems(resolve, url);
  });
};
