const isJWToken = require("./isJWToken");

const JWTs = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkpTRVNTSU9OSUQiOiJnRm9pYnRPVVluLUgwX3llRkVYZVR2Q3FPRHBRUjZTdHl2cHZyVlhoUEpJSGRVektjNjBLIS0xNTczMjYzODYyIiwidW5sb2dnZWRVc2VySWQiOm51bGwsImVtYWlsIjoiYmFzaWxlLmJlbGRhbWVAb3llei5mciIsImlkIjoiMjg0MjY2MjA2IiwiaWRHVEEiOiIyNjNiMmZjYy04MDVhLTQ4NmEtYmFjYy1jNjU0NWYxZmQ3YTYiLCJoYXNDYXJkIjpmYWxzZSwiaXNSSCI6ZmFsc2UsIm5iT3JkZXJzIjp7Imdyb2NlcnkiOjkxNCwiZmFzaGlvbiI6MH0sImlzTWVkaWNhbENyZXciOmZhbHNlfSwiZXhwIjoxNTg1NDIyMTIxLCJpYXQiOjE1ODU0MjA2MjF9.NsGbYePxz95Xt8bgMs4QN_K3wmrP6oI1Q-xX_cwhNhU",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo0NjU0NjQ0NjU0NH0.JG9ys4Rr4CT3RKZwO3OIwYrWf3aY5Z4B9RKIE7j83n4",
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVyenR6ZXJ0enR0IiwidGhpbmdzIjoiYmFzaWxlb3ppZWpmb2l6amVmIiwiaWF0Ijo0NjU0NjQ0NjU0NH0.UO2bPLwp5KGIF-g6bSU9Bnbr_Afu9r9Ub3VtzljOULEjJj2P9kbp234s7WieuYHRJAyRndh4A-nnE3LkG18iPQ",
  "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCIsImtpZCI6ImlUcVhYSTB6YkFuSkNLRGFvYmZoa00xZi02ck1TcFRmeVpNUnBfMnRLSTgifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.cJOP_w-hBqnyTsBm3T6lOE5WpcHaAkLuQGAs1QO-lg2eWs8yyGW8p9WagGjxgvx7h9X72H7pXmXqej3GdlVbFmhuzj45A9SXDOAHZ7bJXwM1VidcPi7ZcrsMSCtP1hiN",
  "eyJhbGciOiJQUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImFkaGhtaW4iOnRydWUsImFkbWhoaW4iOnRydWUsImFkZmdoZmdoaG1pbiI6dHJ1ZSwiYWRmZ2hmZ2htaW4iOnRydWUsImFkbWZnaGZnaGZnaGluIjp0cnVlLCJhZGZnaGZnZ2hmZ2htaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.HJzMPqx9G93Q2QAZrs3GCV5pqYY7g05QIokdtJvA1_RghU02oES3UPlZ_uEZNa6oBcOoXO102QX4NjConDUOzfc_Re84A6lGG_l69p8JbCnnoCed0V3k1_V0KV0g3oDj72-IRpLNFcLKHtvL8BpWjRHVeQnF53vwhPZN-bsYf8Ir4nXhZfID1g33anxoPzUNdVj5wAN6OczxdeaZFs0thQElCVk-77TnPZm9sO66zm31gwpXOzR9jBKKeCIX_hQRsC-jQfhOzoZkLINrVdfFpPI2y1rPRIQ_qxLupnOVwakKnz1QJ94PrPLmnaMNurHyuXOvqT8RzxliUipn8Wd4yw"
];

test.each(JWTs)("%s is a jtwtoken", token => {
  expect(isJWToken(token)).toBe(true);
});

const notTokens = [
  "%7B%22userAmount%22%3A0%2C%22userAmount%22%3A0%2C%22userAmountTotal%22%3A0%2C%22userDeliveryType%22%3A%22%22%2C%22userFrequencyFashion%22%3A0%2C%22userFrequencyGrocery%22%3A0%2C%22userLifeTimeValue%22%3A30%2C%22userRecencyFashion%22%3A0%2C%22userRecencyGrocery%22%3A914%2C%22userTransactionsTotal%22%3A0%7D",
  "eyJ0ZWFzZXIiOnRydWUsImRpYWxvZyI6ZmFsc2UsInNpZGViYXIiOm51bGwsInNpZGViYXJDb250YWluZXJTdHlsZSI6e319",
  "99D4F40450B5EC433B950EF87375BAF0~mbjbdl0qUSmvBKEUn90Etw55GHMkR9q7uatSO/BiiqX8etYTegIq5Twu//wJB4+qMcLoGoCB44ghzoBJS1O10iacsDWK6nKcdurZJ10CzQQ0TKOErSPu0hZPs1LJSnkDsdJytWJBm9mZlFc8aAme3GRKz6o/x7MIBsuNR84oohQ=",
  "iauhdiauhzd",
  false,
  true,
  null,
  undefined,
  () => {},
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpYXQiOjE1MTYyMzkwMjJ9tbDepxpstvGdW8TC3G8zg4B6rUYAOvfzdceoH48wgRQ"
];

test.each(notTokens)("%s is not a jtwtoken", token => {
  expect(isJWToken(token)).toBe(false);
});
