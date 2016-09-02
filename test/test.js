var request = require('request')
var xray = require('x-ray')()
var makeDriver = require('../')
var assert = require('assert')

describe('Driver', function() {
	describe('Arguments', function() {
		it('Should work with no argument', function(done) {
			var driver = makeDriver()
			var r = xray.driver(driver)

			testInstance(r, done)
		})

		it('Should work with an object argument', function(done) {
			var driver = makeDriver({})
			var r = xray.driver(driver)

			testInstance(r, done)
		})

		it('Should work with a function argument', function(done) {
			var driver = makeDriver(request.defaults({method:"POST"}))
			var r = xray.driver(driver)

			testInstance(r, done)
		})
	})

	describe('Errors', function() {
		it('Should pass on errors', function(done) {
			var driver = makeDriver()
			var r = xray.driver(driver)

			testInstance(r, "http://NotARealUrl.com", function(err, res) {
				assert(err)
				done()
			})
		})
	})
})

function testInstance(r, url, callback) {
	if(!callback) {
		callback = url
		url = "https://github.com/"
	}

	r(url, 'title')(callback)
}