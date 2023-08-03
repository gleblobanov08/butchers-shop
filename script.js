const products = {
   pork: [
   	{ name: "Pork Wings", description: "Just imagine how tasty it is.", image: "media/pork1.jpeg" },
   	{ name: "Pork Head", description: "Or that's Lord of the flies?", image: "media/pork2.jpeg"},
		{ name: "Bacon", description: "How it supposed to be.", image: "media/pork3.jpg" }
   ],
   lamb: [
      { name: "Leg of Lamb", description: "Leg of lamb is a classic roast that is flavorful and tender.", image: "lamb1.jpg" },
      { name: "Lamb Chops", description: "Lamb chops are small, tender cuts of meat that are quick to cook.", image: "lamb2.jpg" },
	],
   turkey: [
      { name: "Butun Hindi", description: "Turkey in Turkey", image: "media/turkey1.jpg" },
      { name: "Turkey Breasts", description: "Turkey breasts are lean and can be roasted or grilled.", image: "turkey2.jpg" },
   ],
   chicken: [
      { name: "Whole Chicken", description: "Whole chicken is versatile and can be used in various recipes.", image: "chicken1.jpg" },
      { name: "Chicken Breasts", description: "Chicken breasts are lean and can be grilled or baked.", image: "chicken2.jpg" },
   ],
	fish: [
		{ name: "Fish Sticks", description: "Do you like it? What are you, a gay fish?", image: "media/fish1.jpeg" },
	],
	other: [
		{ name: "", description: "", image: "" },
	]
};
    
const animalList = document.querySelectorAll('.animal');
    
animalList.forEach(animal => {
   animal.addEventListener('click', () => {
      const animalName = animal.textContent.toLowerCase();
      const productList = document.getElementById('products');
      productList.innerHTML = "";
        
      if (products[animalName]) {
         products[animalName].forEach(product => {
         const listItem = document.createElement('li');
         const image = document.createElement('img');
         image.src = product.image;
         image.alt = product.name;
         const name = document.createElement('h3');
         name.textContent = product.name;
         const description = document.createElement('p');
         description.textContent = product.description;
   
         listItem.appendChild(image);
         listItem.appendChild(name);
         listItem.appendChild(description);
         productList.appendChild(listItem);
      });
		}
   });
});