const request = require("request");
const cached = require("cached-request")(request);
const filters = require("./filters");
const xray = require("x-ray");
const os = require("os");

cached.setCacheDirectory(os.tmpdir());

function driver(context, callback) {
	console.log(`GET ${context.request.url}`);
	return cached({ url: context.request.url }, function(err, response, body) {
		return callback(err, body)
	})
}

const x = xray({ filters }).driver(driver);

module.exports = { x, driver };