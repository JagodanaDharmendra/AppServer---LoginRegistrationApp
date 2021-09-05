const { connect } = require("./helpers/connection/mongodb");

(async () => {
  await connect();
  require("./bin/www");
})();
