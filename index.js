const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

// Calls fetchBreedDescription from breedFetcher.js, all the console.logging is done in callback function in index.js. No callback function defined in breedFetcher.js
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {

   
    console.log(desc); // prints out breed name and description
    
    
  }
});