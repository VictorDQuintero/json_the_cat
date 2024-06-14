const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

// Calls fetchBreedDescription from breedFetcher.js, all the console.logging is done in callback function in index.js. No callback function defined in breedFetcher.js
fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {

   
    console.log(`${data[0].name} breed description: "${data[0].description}"`); // prints out breed name and description
    
    
  }
});