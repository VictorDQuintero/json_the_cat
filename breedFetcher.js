const needle = require("needle");

// Function that takes a callback function and gives it the response.body of a user specified cat breed from a needle.get search request
// from thecatapi.com
const breedFetcher = function(callback) {
 
  const breed = process.argv[2]; // takes user provided cat breed

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // url to search that specific cat breed


  needle.get(url, (error, response) => { // sends get request to the catapi.com
    if (error) {
      console.log("error:", error); // Print the error if one occurred
    } else {
      callback(response.body); // sends response.body and breed to callback function
    }

  });
};

//Function that prints out the description of a user provided cat breed
const descriptionPrinter = function(data) {
  
  if (data.length === 0) { // If array is empty then the cat breed wasn't found
    console.log(`Cat breed not found.`);
  } else {
    console.log(`${data[0].name} breed description: "${data[0].description}"`); // prints out breed name and description
  }

};



breedFetcher(descriptionPrinter);