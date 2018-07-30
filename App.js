var data = [
{"name": "Seared steaks ",
 "photo": "steak.jpg",
 "tips": "1. Make sure steaks are at room temperature before cooking or you will burn the outsides while trying to bring the middle to temperature. 2. When you place your steak in the skillet, make sure you hear that sizzle otherwise your pan is too cool."
},
{"name": "Slow-Cooker Rotisserie-Style Chicken",
 "photo": "chicken.jpg",
 "tips": "1. Spray 5-quart oval slow cooker with cooking spray. 2. In small bowl, stir together brown sugar, chili powder and salt. 3. Pat chicken dry, both inside and outside, with paper towels. Rub chicken all over with brown sugar mixture."
},
{"name": "Crispy Fish with Lemon-Dill Sauce",	
 "photo": "fish.jpg",
 "tips": "easy too!"},
]

var app = document.getElementById("App");

function displayDish(dish) {
  return `
  <div class='block'>
	<img class='block-img' src=${dish.photo}>
	<div class='block-detail'>
      <h1 class='block-name'>${dish.name}</h1>
	  <p>${dish.tips}</p>
	</div>
  </div>
  `
}

app.innerHTML = `${data.map(displayDish).join('')}`