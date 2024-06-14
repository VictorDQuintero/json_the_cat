const needle = require("needle");

const breedFetcher = function (){
 
const breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


needle.get(url, (error, response) => {
  if(error){
    console.log("error:", error); // Print the error if one occurred
  }
  
   
  const data = response.body;
  console.log(`${breed} breed description: ` + data[0].description);

});



}




breedFetcher();