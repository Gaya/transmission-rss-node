const readFeed = require('./lib/readFeed');

readFeed('http://showrss.info/user/70577.rss?magnets=true&namespaces=true&name=null&quality=null&re=null')
  .then(items => {
    items.map(item => {
      console.log(item.description);
    });
  });
