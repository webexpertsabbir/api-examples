const loadMeals = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyMeals(data.meals))
};

const dispalyMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>${meal.strInstructions.slice(0, 200)} </p>
            </div>
        </div>
        `;

        mealsContainer.appendChild(mealDiv);

    });


}

const searchFood = () =>{
    const searchInputValue = document.getElementById('search-input-value');
    const searchText = searchInputValue.value;
    loadMeals(searchText);
    searchInputValue.value = '';
}

loadMeals('fish');