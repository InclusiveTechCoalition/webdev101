
function getCourses() {
  const url = 'https://webdev101-api.herokuapp.com/api/v1/courses';
  return makeRequest('GET', url)
  .then(parseJSON)
}

function getCourse(id) {
  const url = `https://webdev101-api.herokuapp.com/api/v1/courses/${id}`;
  return makeRequest('GET', url)
  .then(parseJSON)
}

function parseJSON(response) {
  return JSON.parse(response);
}

function makeRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
      return;
    }

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}


export { getCourse, getCourses }