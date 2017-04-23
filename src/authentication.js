const { fetch } = require("./api");
const { HTTP } = require("./constants");

const ENDPOINTS = {
  GET_API_TOKEN: () => "/v2/authenticate.json",
  FACEBOOK_LOGIN: () => "/v2/facebook_loginv2.json",
  GOOGLE_LOGIN: () => "/v2/google_login.json"
};

const getApiToken = ({ username, password }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.GET_API_TOKEN(),
    auth: {
      username,
      password
    }
  });

const facebookLogin = ({ facebookId, facebookToken }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.FACEBOOK_LOGIN(),
    data: {
      facebook_id: facebookId,
      facebook_token: facebookToken
    }
  });

const googleLogin = ({ email, googleToken }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.GOOGLE_LOGIN(),
    data: {
      email,
      google_token: googleToken
    }
  });

const authentication = {
  getApiToken,
  facebookLogin,
  googleLogin
};

module.exports = authentication;
