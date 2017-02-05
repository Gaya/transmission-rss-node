const Transmission = require('transmission');
const config = require('../.config.json');

const transmission = new Transmission({
  host: config.host || '0.0.0.0',
  port: config.port || 9091,
  username: config.username || '',
  password: config.password || '',
});

module.exports = function addToTransmission(url) {
  transmission.addUrl(url, function (err) {
    if (err) { throw new Error(err); }
  });
}
