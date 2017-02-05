const readFeed = require('./lib/readFeed');
const addToTransmission = require('./lib/addToTransmission');
const config = require('./.config.json');

Promise
  .all(config.feeds.map(readFeed))
  .then(feeds => {
    feeds.forEach(items => {
      items.map(item => {
        addToTransmission(item.link);
        console.log(item.description);
      });
    });
  });
