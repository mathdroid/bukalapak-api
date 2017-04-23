const { create } = require("axios");
const { resolve, reject } = require("bluebird");

const api = create({
  baseURL: "https://api.bukalapak.com",
  responseType: "json",
  timeout: 10000
});

api.fetch = ({ method, url, params, data, auth }) =>
  api({
    method,
    url,
    params,
    auth,
    data: (/post/i.test(method) ||
      /put/i.test(method) ||
      /patch/i.test(method)) &&
      data
  })
    .then(({ data }) => {
      return resolve(data);
    })
    .catch(err => {
      const { response: { data } } = err;
      return reject(data);
    });

module.exports = api;
