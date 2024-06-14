const needle = require("needle");

// Function that takes a callback function and gives it the response.body of a user specified cat breed from a needle.get search request
// from thecatapi.com
const fetchBreedDescription = function(breedName, callback) {
 
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // url to search that specific cat breed


  needle.get(url, (error, response) => { // sends get request to the catapi.com
    if (error) {
      response = null;
      callback(error, response); // if error, sends error and response to callback, error is printed in index.js, response is null
    } else if (response.body.length === 0) { // if the response.body array is empty sets error to string and response to null
      error = "Cat breed not found.";
      response = null;
      callback(error, response);
    } else {
      callback(error, response.body[0].description);// if error is null, it sends error and the breed's description to callback, callback prints out description from response.body
    }

  });
};




module.exports = {fetchBreedDescription};


