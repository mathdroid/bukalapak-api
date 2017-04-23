"use strict";

var _require = require("axios"),
    create = _require.create;

var _require2 = require("bluebird"),
    resolve = _require2.resolve,
    reject = _require2.reject;

var api = create({
  baseURL: "https://api.bukalapak.com",
  responseType: "json",
  timeout: 10000
});

api.fetch = function (_ref) {
  var method = _ref.method,
      url = _ref.url,
      params = _ref.params,
      data = _ref.data,
      auth = _ref.auth;
  return api({
    method: method,
    url: url,
    params: params,
    auth: auth,
    data: (/post/i.test(method) || /put/i.test(method) || /patch/i.test(method)) && data
  }).then(function (_ref2) {
    var data = _ref2.data;

    return resolve(data);
  }).catch(function (err) {
    var data = err.response.data;

    return reject(data);
  });
};

module.exports = api;