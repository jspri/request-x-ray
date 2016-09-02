# request-x-ray

Simple [request](https://github.com/request/request) driver for [x-ray](https://github.com/lapwinglabs/x-ray). Useful for storing cookies, setting custom headers and changing HTTP method.

## Installation

```js
npm install x-ray
```

## Usage

```js
const xray = require('x-ray')()
const makeDriver = require('request-x-ray')

const options = {
	method: "GET", 						//Set HTTP method
	jar: true, 							//Enable cookies
	headers: {							//Set headers
		"User-Agent": "Firefox/48.0"
	}
}

const driver = makeDriver(options)

const x = xray.driver(driver)

r("http://www.google.com", "title")(function(err, res) {
	console.log("Page retrieved with request!")
})
```
## API

### makeDriver([opts|fn])

Creates a driver to be used by `xray.driver()`. Possible arguments are a request [options object](https://github.com/request/request#requestoptions-callback) or a `request` instance, for example `request.defaults()` or `request.post()` e.t.c

## License

MIT