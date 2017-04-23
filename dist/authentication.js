"use strict";

var _require = require("./api"),
    fetch = _require.fetch;

var _require2 = require("./constants"),
    HTTP = _require2.HTTP;

var ENDPOINTS = {
  GET_API_TOKEN: function GET_API_TOKEN() {
    return "/v2/authenticate.json";
  },
  FACEBOOK_LOGIN: function FACEBOOK_LOGIN() {
    return "/v2/facebook_loginv2.json";
  },
  GOOGLE_LOGIN: function GOOGLE_LOGIN() {
    return "/v2/google_login.json";
  }
};

var getApiToken = function getApiToken(_ref) {
  var username = _ref.username,
      password = _ref.password;
  return fetch({
    method: HTTP.POST,
    url: ENDPOINTS.GET_API_TOKEN(),
    auth: {
      username: username,
      password: password
    }
  });
};

var facebookLogin = function facebookLogin(_ref2) {
  var facebookId = _ref2.facebookId,
      facebookToken = _ref2.facebookToken;
  return fetch({
    method: HTTP.POST,
    url: ENDPOINTS.FACEBOOK_LOGIN,
    data: {
      facebook_id: facebookId,
      facebook_token: facebookToken
    }
  });
};

var googleLogin = function googleLogin(_ref3) {
  var email = _ref3.email,
      googleToken = _ref3.googleToken;
  return fetch({
    method: HTTP.POST,
    url: ENDPOINTS.GOOGLE_LOGIN,
    data: {
      email: email,
      google_token: googleToken
    }
  });
};

var authentication = {
  getApiToken: getApiToken,
  facebookLogin: facebookLogin,
  googleLogin: googleLogin
};

module.exports = authentication;