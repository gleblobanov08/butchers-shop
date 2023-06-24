const products = [
    {
        image: "image1.jpeg",
        title: "Ground Beef",
        description: "Our freshly ground beef is perfect for making burgers, meatballs, and more. Made with high-quality beef from local farms."
    },
    {
        image: "image2.jpeg",
        title: "Sirloin Steak",
        description: "Our sirloin steak is cut from the rear back portion of the animal, resulting in a flavorful and tender cut of beef. Great for grilling or pan-searing."
    },
    {
        image: "image3.jpeg",
        title: "Ribeye Steak",
        description: "The ribeye steak is cut from the rib section of the animal and is known for its marbling and rich flavor. Best cooked over high heat to achieve a crusty, caramelized exterior."
    },
    {
        image: "image4.jpeg",
        title: "Filet Mignon",
        description: "The filet mignon is a tender and lean cut of beef that's perfect for special occasions. It's often considered the most luxurious cut of beef due to its tenderness and buttery texture."
    },
    {
        image: "image5.jpeg",
        title: "Bacon",
        description: "Our bacon is thick-cut and made from high-quality pork belly. Perfect for breakfast, sandwiches, or adding to your favorite recipes for a smoky, savory flavor."
    },
    {
        image: "image6.jpeg",
        title: "Pork Chops",
        description: "Our pork chops are cut from locally-raised pigs and are perfect for grilling or pan-frying. They're juicy, tender, and full of flavor."
    },
    {
        image: "image7.jpeg",
        title: "Spare Ribs",
        description: "Our spare ribs are meaty and flavorful, great for smoking or grilling. Made from high-quality pork with no added hormones or antibiotics."
    },
    {
        image: "image8.jpeg",
        title: "Sausage",
        description: "Our sausages are made with high-quality meats and natural spices for a delicious and savory flavor. Perfect for breakfast, grilling, or adding to your favorite recipes."
    },
    {
        image: "image9.jpeg",
        title: "Leg of Lamb",
        description: "Our leg of lamb is a classic and impressive roast that's perfect for holidays or special occasions. It's tender, juicy, and full of flavor."
    },
    {
        image: "image10.jpeg",
        title: "Lamb Chops",
        description: "Our lamb chops are cut from locally-raised lambs and are perfect for grilling or pan-frying. They're juicy, tender, and full of flavor."
    },
    {
        image: "image11.jpeg",
        title: "Ground Lamb",
        description: "Our ground lamb is perfect for making flavorful and juicy lamb burgers, meatballs, or adding to your favorite recipes for a delicious twist."
    },
    {
        image: "image12.jpeg",
        title: "Whole Chicken",
        description: "Our whole chickens are free-range and raised without antibiotics or hormones. Perfect for roasting with your favorite herbs and spices."
    },
    {
        image: "image13.jpeg",
        title: "Chicken Breasts",
        description: "Our chicken breasts are juicy and flavorful, perfect for grilling, sautéing, or baking. Made from free-range chickens raised without antibiotics or hormones."
    },
    {
        image: "image14.jpeg",
        title: "Chicken Thighs",
        description: "Our chicken thighs are flavorful and juicy, perfect for grilling or baking. Made from free-range chickens raised without antibiotics or hormones."
    },
    {
        image: "image15.jpeg",
        title: "Whole Turkey",
        description: "Our whole turkeys are juicy and flavorful, perfect for Thanksgiving or any festive occasion. Made from turkeys raised without antibiotics or hormones."
    },
    {
        image: "image16.jpeg",
        title: "Turkey Breasts",
        description: "Our turkey breasts are lean and flavorful, perfect for roasting or grilling. Made from turkeys raised without antibiotics or hormones."
    },
    {
        image: "image17.jpeg",
        title: "Turkey Legs",
        description: "Our turkey legs are meaty and flavorful, great for smoking or roasting. Made from turkeys raised without antibiotics or hormones."
    },
    {
        image: "image18.jpeg",
        title: "Ham",
        description: "Our ham is juicy and flavorful, perfect for sandwiches or adding to your favorite recipes. Made from locally-raised pigs with no added hormones or antibiotics."
    },
    {
        image: "image19.jpeg",
        title: "Roast Beef",
        description: "Our roast beef is tender and flavorful, perfect for adding to sandwiches or serving with your favorite sides. Made from high-quality beef from local farms."
    }
];

function addProductItems () {
    const productSection = document.querySelector("#products");

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = product.image;

        const productHeading = document.createElement("h3");
        productHeading.textContent = product.title;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productHeading);
        productDiv.appendChild(productDescription);

        productSection.appendChild(productDiv);
    }
}

addProductItems();