// ----------------------------------------------------------------
// Plants Array
// ----------------------------------------------------------------

const plants = [
  {
    "name": "Fikus Tree",
    "price": 350,
    "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    "image": "plant1.png",
    onSale: true
  },
  {
    "name": "White Sprite Succulent",
    "price": 200,
    "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    "image": "plant2.png",
    onSale: false
  },
  {
    "name": "Snake Plant",
    "price": 400,
    "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    "image": "plant3.png",
    onSale: true
  },
  {
    "name": "Parlour Palm",
    "price": 350,
    "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    "image": "plant4.png",
    onSale: false
  },
  {
    "name": "Japanese Maple",
    "price": 1200,
    "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    "image": "plant5.png",
    onSale: true
  }
];

// ----------------------------------------------------------------
// When the document loads
// ----------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    loadPlants();

}); 

// ----------------------------------------------------------------
// Load all plants
// ----------------------------------------------------------------

function loadPlants() {

    // Load and display all the plants
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      
      console.log(plant);

      // 1: Select plants container and add the current array plant to it
      $("#plantsContainer").append($("#plantCardTemplate").html());

      // 2: Create a varible that contains the most recently added plant card
      let currentChild = $("#plantsContainer").children().eq(i+1);

      // 3: Set the content for the plant card from the plants list
      $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
      $(currentChild).find("#nameText").text(plant.name);
      $(currentChild).find("#priceText").text('R' + plant.price);
      $(currentChild).find("#descriptionText").text(plant.description);

      // 4: Hide the description text from the plant card
      $(currentChild).find("#descriptionText").hide();

    }
}

// ----------------------------------------------------------------
// When the plant card is clicked
// ----------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});


$(document).on('click', 'button.deleteRow', function(event) {
  $(this).closest("tr").remove();
});

const plantList = document.getElementById("plantList");
const onSaleButton = document.getElementById("onSaleButton");
const alphabeticalButton = document.getElementById("alphabeticalButton");

function renderPlants(plantArray) {
  plantList.innerHTML = "";
  plantArray.forEach(plant => {
      const plantCard = document.createElement("div");
      plantCard.className = "plant-card";
      plantCard.textContent = plant.name + (plant.onSale ? " (On Sale)" : "");
      plantList.appendChild(plantCard);
  });
}

onSaleButton.addEventListener("click", () => {
  const onSalePlants = plants.filter(plant => plant.onSale);
  renderPlants(onSalePlants);
});

alphabeticalButton.addEventListener("click", () => {
  const sortedPlants = [...plants].sort((a, b) => a.name.localeCompare(b.name));
  renderPlants(sortedPlants);
});

// Initial rendering
renderPlants(plants);
