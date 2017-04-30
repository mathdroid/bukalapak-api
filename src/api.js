const { create } = require("axios");
const { resolve, reject } = require("bluebird");

const api = create({
  baseURL: "https://api.bukalapak.com",
  responseType: "json",
  timeout: 10000
});

api.fetch = ({ method, url, params, data, auth }) => {
  const payload = /(post|put|patch)/i.test(method) && data;

  return api({
    method,
    url,
    params,
    auth,
    data: payload
  })
    .then(({ data }) => {
      return resolve(data);
    })
    .catch(err => {
      const { response: { data } } = err;
      return reject(data);
    });
};

module.exports = api;
