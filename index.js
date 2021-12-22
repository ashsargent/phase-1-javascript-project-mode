// event listener to toggle  modal's

//weights
document.getElementById("weights").addEventListener("click", function () {
  console.log("ive been clicked");
  document.querySelector(".modalClass").style.display = "block";
});


  document.getElementById("close").addEventListener("click", function () {
    console.log("ive been clicked");
    document.querySelector(".modalClass").style.display = "none";

});

//hiit
document.getElementById("HIIT").addEventListener("click", function () {
  console.log("ive been clicked");
  document.querySelector(".modalClass").style.display = "block";
});


  document.getElementById("close").addEventListener("click", function () {
    console.log("ive been clicked");
    document.querySelector(".modalClass").style.display = "none";

});



//meditation

document.getElementById("meditate").addEventListener("click", function () {
  console.log("ive been clicked");
  document.querySelector(".modalClass").style.display = "block";
});


  document.getElementById("close").addEventListener("click", function () {
    console.log("ive been clicked");
    document.querySelector(".modalClass").style.display = "none";

});


//stretching

document.getElementById("Stretching").addEventListener("click", function () {
  console.log("ive been clicked");
  document.querySelector(".modalClass").style.display = "block";
});


  document.getElementById("close").addEventListener("click", function () {
    console.log("ive been clicked");
    document.querySelector(".modalClass").style.display = "none";

});


//api setup
var apiPath = "https://trackapi.nutritionix.com/v2/search/instant?query=";
var apiKey = "1e052d990291a356e9947cdf2d3bcaa8";
var apiId = "c0e29fbc";


// searchbar click event
function setup() {
  createCanvas(400, 200);
  var button = select("#submit");
  button.mousePressed(foodSearch);
  input = select("#searchbar");
}



//search bar and api call
function foodSearch() {
  var url = apiPath + input.value() + apiId + apiKey;
  loadJSON(url, gotData);
}

document.querySelector("#submit").addEventListener("click", function () {
  const query = document.querySelector("#searchBar").value;
  console.log("ive been clicked");

  fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      "x-app-id": "c0e29fbc",
      "x-app-key": "1e052d990291a356e9947cdf2d3bcaa8",
    },
  })
    .then((response) => response.json())
    .then((data) => renderResults(data.common));
});

function renderResults(data) {


}
  //for each method
  //create elements.
  //rewatch pokemon live




//commented out api info for reference use only
  /*
fetch ("https://trackapi.nutritionix.com/v2/search/instant?query=burger",{
headers:{
"Content-Type":"application/json",
 "x-app-id":"c0e29fbc",
 "x-app-key":"1e052d990291a356e9947cdf2d3bcaa8"
}
})
.then(response =>response.json())
.then(data =>console.log(data))


fetch ("https://trackapi.nutritionix.com/v2/search/item?nix_item_id=516d9a40e3afed032c7daae6",{
headers:{
"Content-Type":"application/json",
 "x-app-id":"c0e29fbc",
 "x-app-key":"1e052d990291a356e9947cdf2d3bcaa8"
*/
