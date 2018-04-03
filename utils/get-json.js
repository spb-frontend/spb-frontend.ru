export function getJSON(url, cb) {
  const request = new XMLHttpRequest()
  request.open('GET', url, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      cb(JSON.parse(request.responseText))
    } else {
      console.error('Server error: ', request) // eslint-disable-line no-console
    }
  }

  request.onerror = function() {
    console.error('Connection error: ', request) // eslint-disable-line no-console
  }

  request.send()
}
