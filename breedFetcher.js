const needle = require("needle");

needle.get("https://api.thecatapi.com/v1/breeds/search?q=siberian", (error, response, body) => {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("first entry of body:", body[0].description); // Print the HTML for the Google homepage.
  console.log("------");
  console.log(typeof body);
});