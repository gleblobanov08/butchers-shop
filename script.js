const products = {
      pork: [
        { name: "Ham", description: "Ham is a delicious and popular choice for meals and sandwiches.", image: "pork1.jpg" },
        { name: "Bacon", description: "Bacon is a tasty and crispy meat that goes well with many dishes.", image: "pork2.jpg" },
        { name: "Pig Head with Sunglasses on", description: "It's funny, innit?"},
      ],
      lamb: [
        { name: "Leg of Lamb", description: "Leg of lamb is a classic roast that is flavorful and tender.", image: "lamb1.jpg" },
        { name: "Lamb Chops", description: "Lamb chops are small, tender cuts of meat that are quick to cook.", image: "lamb2.jpg" },
        // Add more lamb products here...
      ],
      turkey: [
        { name: "Whole Turkey", description: "Whole turkey is a popular choice for holiday feasts.", image: "turkey1.jpg" },
        { name: "Turkey Breasts", description: "Turkey breasts are lean and can be roasted or grilled.", image: "turkey2.jpg" },
        // Add more turkey products here...
      ],
      chicken: [
        { name: "Whole Chicken", description: "Whole chicken is versatile and can be used in various recipes.", image: "chicken1.jpg" },
        { name: "Chicken Breasts", description: "Chicken breasts are lean and can be grilled or baked.", image: "chicken2.jpg" },
        // Add more chicken products here...
      ],
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
