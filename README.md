This project aim at giving the user the ability to know what ingredients they have, what recipes they can make out of it and what they need to buy for the week for meals.
The user can add ingredients and recipes as they wish.

The final project should have the following features:
-Make a weekly schedule that create a list of meals.
-Allow the user to store different kind of ingredients with different category (basic ones are : vegetables, fruits, dessert, fish, meat, grains, dairy, premade meal . The user is allowed to modify a category and create their own)
-Ability to add recipes to a list of recipes the user enjoy.
-See how much money each recipes cost.
-See how much money the user spend in each category of food, as well as on specific food.
-The ability to use API for the user to add his groceries right away instead of having to type it. (or at least make a system that allows the website to access grocery bills to see what was bought, and make each line a new ingredient or update the amount of the ingredient bought if already in the table)

-------------------------------------------------------------------------------------------------------------

Project logs:

28/06/22
I made the basics of the website : header, FeedIngredient, Description, FeedRecipe.
I worked a bit on the styling for it to look decent and have an idea of how it would look like in the end eventually.

29/06/22
Made a mock API with few ingredient.recipe and worked on the frontend display with it.
I also made the css have different variables like colors, pixel lengths etc so i could change it later one more easely.
I drew a prototype of how the website should look like at the end of the project.

30/06/22
I decided to make a project logs area in the README so i can remember which problem i faced and how i solved them. I'm not sure of what i did the previous sessions working on this project therefore the prvious logs arent complete.
I decided to make the feed display each ingredient in 2-3 columns so that the ingredient feed and recipe feed can take enough space on the website + it shows more things. But i havent added it yet since i'm still struggling with other point of the code.
I wanted to make the "add ingredient/recipe" button. The function work, however whenever I try to modify the list of ingredient it will modify the object but wont update the component/display. I tried using useState and it didnt work. I tried using useEffect but didnt find a solution yet. It was working with useState if i only wanted to add an element to the list but it doesn,t work anymore if i want to modify something in the list. I couldn't find why though...
I should focus on making the +/- button of each ingredient work properly next time. it currently do the proper thing but doesnt change the actual ingredient list amount. Solving this issue would probably give me an idea on how to solve the display issue as well.

For the next session i need to continue on finding a solution for the ingredient feed, then apply this same solution to the recipe feed so that the user can also add a recipe of their own. I also need to add a form for the user to fill when they want to add something to the list, as well as a select field so that the user cannot miss-type  a category/ingredient name etc when they want to add an ingredient to the list(use <select /> <option />). The form also need to appear as a popup on top of the page and can be cancelled either by clicking the quit button or clicking out of the bounds of the form.

01/07/22

-------------------------------------------------------------------------------------------------------------

Left to do:

-build an actual backend with a user system (login, loggout, create account, etc).
-styling
-create a weekly schedule algorithms.
-the recipe part of the website
-the description part of the website (add a description field to the ingredient table as well)
-change the way the tables works. (have a category table to store every category the user wants? or have that related to the user table maybe?)
