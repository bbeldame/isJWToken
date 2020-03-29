// Taken from https://www.regextester.com/105777
const regexpression = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

function isJWToken(str = "") {
  return typeof str === "string" && regexpression.test(str);
}

module.exports = isJWToken;
