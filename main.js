
fetch('/user-data')
.then(response => response.json())
.then(data => {
    document.getElementById('user-data').textContent = JSON.stringify(data);
});

// Update user data
function updateData() {
const newData = { example: 'New user-specific data' };
fetch('/user-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData)
})
.then(response => response.json())
.then(result => {
    if (result.success) {
        alert('Data updated successfully');
        location.reload();
    }
});
}


const all = [
    {
        "title": "Spaghetti Carbonara",
        "image": "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg",
        "ingredients": [
            "spaghetti",
            "pancetta",
            "eggs",
            "pecorino cheese",
            "parmesan",
            "Black pepper",
            "Salt",
            "cloves garlic"
        ],
        "summary": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        "instructions": "1. Cook the spaghetti. 2. Fry the pancetta with the garlic. 3. Beat the eggs and mix with the cheese. 4. Combine everything and serve."
    },
    {
        "title": "Chicken Alfredo",
        "image": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-above-500x500.jpg",
        "ingredients": [
            "fettuccine",
            "chicken breasts",
            "butter",
            "heavy cream",
            "parmesan",
            "cloves garlic",
            "Salt",
            "Black pepper",
            "Parsley"
        ],
        "summary": "Creamy pasta with chicken and a rich Alfredo sauce.",
        "instructions": "1. Cook the fettuccine. 2. Cook the chicken breasts and slice them. 3. Make the Alfredo sauce. 4. Combine everything and garnish with parsley."
    },
    {
        "title": "Beef Tacos",
        "image": "https://joyfoodsunshine.com/wp-content/uploads/2022/04/mexian-ground-beef-tacos-recipe-9.jpg",
        "ingredients": [
            "ground beef",
            "taco shells",
            "onion",
            "tomatoes",
            "Lettuce",
            "Cheddar cheese",
            "Taco seasoning",
            "Salt",
            "Sour cream",
            "Salsa"
        ],
        "summary": "Delicious tacos filled with seasoned beef and fresh toppings.",
        "instructions": "1. Cook the ground beef with taco seasoning. 2. Prepare the toppings. 3. Assemble the tacos and serve with sour cream and salsa."
    },
    {
        "title": "Vegetable Stir Fry",
        "image": "https://www.allrecipes.com/thmb/MF7yU1MBbRlaT40ogVr-1PgggKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222658-frozen-vegetable-stir-fry-4x3-1382-583b53fa0bcd4247920611ad431c14cb.jpg",
        "ingredients": [
            "broccoli",
            "carrots",
            "bell pepper",
            "onion",
            "snap peas",
            "soy sauce",
            "cloves garlic",
            "Ginger",
            "Salt",
            "Olive oil"
        ],
        "summary": "A healthy and quick vegetable stir fry with a savory sauce.",
        "instructions": "1. Prepare and chop the vegetables. 2. Stir fry the vegetables with garlic and ginger. 3. Add the soy sauce and stir well. 4. Serve hot."
    },
    {
        "title": "Margherita Pizza",
        "image": "https://www.yumcurry.com/wp-content/uploads/2020/06/pizza-margherita-recipe.jpg",
        "ingredients": [
            "Pizza dough",
            "mozzarella cheese",
            "tomato sauce",
            "Fresh basil",
            "Olive oil",
            "Salt",
            "Black pepper"
        ],
        "summary": "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
        "instructions": "1. Prepare the pizza dough. 2. Spread the tomato sauce over the dough. 3. Add mozzarella cheese and basil leaves. 4. Bake the pizza and drizzle with olive oil before serving."
    },
    {
        "title": "Caesar Salad",
        "image": "https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
        "ingredients": [
            "romaine lettuce",
            "parmesan",
            "Croutons",
            "Caesar dressing",
            "chicken breasts",
            "Salt",
            "Black pepper"
        ],
        "summary": "Crisp romaine lettuce with creamy Caesar dressing, parmesan, and chicken.",
        "instructions": "1. Prepare the lettuce and chicken. 2. Toss the lettuce with Caesar dressing. 3. Add chicken, parmesan, and croutons. 4. Serve chilled."
    },
    {
        "title": "Chocolate Brownies",
        "image": "https://scientificallysweet.com/wp-content/uploads/2022/05/IMG_8638-feature-1.jpg",
        "ingredients": [
            "dark chocolate",
            "butter",
            "sugar",
            "eggs",
            "flour",
            "cocoa powder",
            "Vanilla extract",
            "Salt"
        ],
        "summary": "Rich and fudgy chocolate brownies with a crackly top.",
        "instructions": "1. Melt the chocolate and butter. 2. Mix in the sugar, eggs, and vanilla. 3. Add the flour and cocoa powder. 4. Bake and let cool before serving."
    },
    {
        "title": "Garlic Butter Shrimp",
        "image": "https://www.inspiredtaste.net/wp-content/uploads/2023/06/Easy-Cajun-Shrimp-2-1200.jpg",
        "ingredients": [
            "shrimp",
            "butter",
            "cloves garlic",
            "Parsley",
            "Lemon juice",
            "Salt",
            "Black pepper"
        ],
        "summary": "Succulent shrimp cooked in a garlic butter sauce with fresh parsley.",
        "instructions": "1. Prepare the shrimp. 2. Cook the garlic in butter. 3. Add the shrimp and cook until done. 4. Add lemon juice and parsley before serving."
    },
    {
        "title": "Pancakes",
        "image": "https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg",
        "ingredients": [
            "flour",
            "eggs",
            "milk",
            "sugar",
            "baking powder",
            "Salt",
            "Butter",
            "Maple syrup"
        ],
        "summary": "Fluffy pancakes perfect for breakfast or brunch.",
        "instructions": "1. Mix the dry ingredients. 2. Add the wet ingredients and mix well. 3. Cook the pancakes on a hot griddle. 4. Serve with butter and maple syrup."
    },
    {
        "title": "Tomato Soup",
        "image": "https://www.allrecipes.com/thmb/QijITeBBcE99Ur5kDoccAJ35WWo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/277311spicy-fresh-tomato-soupFranceC4x3-56454ad082214f33960f62665fc8c169.jpg",
        "ingredients": [
            "tomatoes",
            "onion",
            "cloves garlic",
            "vegetable broth",
            "Basil",
            "Salt",
            "Black pepper",
            "Olive oil"
        ],
        "summary": "A comforting and rich tomato soup with fresh basil.",
        "instructions": "1. Sauté the onion and garlic. 2. Add the tomatoes and broth. 3. Simmer and blend until smooth. 4. Season and serve with fresh basil."
    }
];

var showSaveButton;

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const select = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'))
                                     .map(checkbox => checkbox.value);

    if (select.length === 0) {
        alert("Please select at least one ingredient");
        return;
    }
    console.log(select);

    const matchingRecipes= RecipeInfo(select);
   
    showSaveButton =true;
    displayRecipes(matchingRecipes)
});


function RecipeInfo(selectedIngredients) {
    // Filter the recipes that contain all the selected ingredients
    const matchingRecipes = all.filter(recipe => {
        return selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
    });
    
    return matchingRecipes
    
    
}



function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        
        // Create and append recipe title
        const title = document.createElement('h3');
        title.textContent = recipe.title;
        title.style.color='red';
        listItem.appendChild(title);
        
        // Create and append recipe image
        const image = document.createElement('img');
        image.src = recipe.image;
        image.style.width='300px';
        image.style.height='150px';

        image.alt = recipe.title;
        listItem.appendChild(image);
        
        // Create and append recipe summary
        const summary = document.createElement('p');
        summary.style.fontSize='20px';
        summary.style.fontWeight='bold';
        summary.textContent = recipe.summary;
        listItem.appendChild(summary);
        

        const ingredients = document.createElement('p');
        ingredients.textContent = "Ingredients: " + recipe.ingredients.join(', '); // Assuming recipe.ingredients is an array
        ingredients.style.fontStyle = 'italic';
        ingredients.style.fontSize = '22px';
        listItem.appendChild(ingredients);
        
        // Create and append recipe instructions
        const instructions = document.createElement('p');
        instructions.textContent = recipe.instructions;
        instructions.style.fontSize = '24px';
        listItem.appendChild(instructions);
        
        // Create and append voice button
        const voiceButton = document.createElement('button');
        
        voiceButton.textContent = "Read Instructions";
        voiceButton.style.marginTop = '10px';
        voiceButton.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance(recipe.instructions);
            speechSynthesis.speak(utterance);
        });
        listItem.appendChild(voiceButton);


        if (showSaveButton) {
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save to Favorites';
        saveButton.addEventListener('click', () => saveToFavorites(recipe));
        listItem.appendChild(saveButton);
    }

        recipeList.appendChild(listItem);
    });
}
function saveToFavorites(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(recipe);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${recipe.title} has been added to your favorites!`);
}

document.getElementById('fav').addEventListener('click', displayFavorites);

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.length === 0) {
        alert("You have no favorite recipes saved.");
        return;
    }
    showSaveButton = false;
    displayRecipes(favorites);
    
    // Hide form and ingredient selection elements
    const form = document.getElementById('form');
    const title = document.getElementById('k');
    const selectIngredients = document.getElementById('p');
    form.style.display = 'none';
    selectIngredients.style.display = 'none';
    title.innerText = "Your Favorites";
    
    title.style.textAlign = 'center';
    title.style.left="550px"
    
    title.style.fontSize="52px"
}