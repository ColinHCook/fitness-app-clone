import React, { useState } from "react";
import axios from "axios";
import MacronutrientPieChart from "./MacronutrientPieChart";
import { FaTimes } from "react-icons/fa"; // Import the 'X' icon

const NutritionTracker = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [meals, setMeals] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
  });
  const [goals, setGoals] = useState({
    calories: 2000,
    proteins: 100,
    carbs: 250,
    fats: 70,
  });

  const totalProteins = Object.values(meals)
    .flat()
    .reduce((total, food) => total + (food.food.nutrients.PROCNT || 0), 0);

  const totalCarbs = Object.values(meals)
    .flat()
    .reduce((total, food) => total + (food.food.nutrients.CHOCDF || 0), 0);

  const totalFats = Object.values(meals)
    .flat()
    .reduce((total, food) => total + (food.food.nutrients.FAT || 0), 0);

  const totalCalories = Object.values(meals)
    .flat()
    .reduce((total, food) => total + (food.food.nutrients.ENERC_KCAL || 0), 0);

  const openPopup = (meal) => {
    setSelectedMeal(meal);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedMeal("");
    setSearchQuery("");
    setSearchResults([]);
    setSelectedFood(null);
  };

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.edamam.com/api/food-database/v2/parser`,
          {
            params: {
              app_id: process.env.REACT_APP_EDAMAM_APP_ID,
              app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
              ingr: query,
            },
          }
        );
        setSearchResults(response.data.hints);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  const addFoodToMeal = () => {
    if (selectedFood && selectedMeal) {
      setMeals((prevMeals) => ({
        ...prevMeals,
        [selectedMeal]: [...prevMeals[selectedMeal], selectedFood],
      }));
      closePopup();
    }
  };

  const removeFoodFromMeal = (meal, foodToRemove) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [meal]: prevMeals[meal].filter(
        (food) => food.food.foodId !== foodToRemove.food.foodId
      ),
    }));
  };

  const handleGoalChange = (event) => {
    const { name, value } = event.target;
    setGoals((prevGoals) => ({
      ...prevGoals,
      [name]: parseFloat(value),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-zinc-800 dark:text-zinc-200">
      <main className="container mx-auto p-4">
        <div className="text-center my-8">
          <h2 className="text-4xl font-bold">Log Your Meals and Calories</h2>
          <p className="text-lg">
            Easily track your daily intake to achieve your health goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Breakfast", "Lunch", "Dinner", "Snacks"].map((meal) => (
            <div
              key={meal}
              className="bg-zinc-800 dark:bg-zinc-800 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{meal}</h3>
              {meals[meal].map((food, index) => (
                <div
                  key={`${food.food.foodId}_${index}`}
                  className="relative mb-2 text-white cursor-pointer group"
                >
                  <div
                    className={`flex justify-between items-center p-2 rounded ${
                      selectedFood?.food.foodId === food.food.foodId
                        ? "bg-blue-500"
                        : ""
                    }`}
                  >
                    <div className="hover:bg-zinc-600 rounded-lg px-2">
                      <span>{food.food.label}</span>
                      <div className="text-sm ">
                        <span>
                          Calories:{" "}
                          {(food.food.nutrients.ENERC_KCAL || 0).toFixed(0)}
                        </span>
                        ,{" "}
                        <span>
                          Proteins:{" "}
                          {(food.food.nutrients.PROCNT || 0).toFixed(1)}g
                        </span>
                        ,{" "}
                        <span>
                          Carbs: {(food.food.nutrients.CHOCDF || 0).toFixed(1)}g
                        </span>
                        ,{" "}
                        <span>
                          Fats: {(food.food.nutrients.FAT || 0).toFixed(1)}g
                        </span>
                      </div>
                    </div>
                  </div>
                  <FaTimes
                    className="absolute top-4 right-2 size-8 text-red-500 hover:text-red-700 cursor-pointer opacity-0 group-hover:opacity-100"
                    onClick={() => removeFoodFromMeal(meal, food)}
                  />
                </div>
              ))}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => openPopup(meal)}
              >
                Add Food
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8">
          <div className="bg-zinc-800 dark:bg-zinc-800 p-6 rounded-lg shadow-md text-white w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Daily Summary</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>Total Calories:</span>
                <span className="text-base">{`${totalCalories.toFixed(0)} / ${
                  goals.calories
                }`}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3.5 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-3.5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(
                      (totalCalories / goals.calories) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Proteins:</span>
                <span className="text-base">{`${totalProteins.toFixed(1)}g / ${
                  goals.proteins
                }g`}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-3.5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(
                      (totalProteins / goals.proteins) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Carbohydrates:</span>
                <span className="text-base">{`${totalCarbs.toFixed(1)}g / ${
                  goals.carbs
                }g`}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3.5 dark:bg-gray-700">
                <div
                  className="bg-yellow-500 h-3.5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(
                      (totalCarbs / goals.carbs) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Fats:</span>
                <span className="text-base">{`${totalFats.toFixed(1)}g / ${
                  goals.fats
                }g`}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3.5 dark:bg-gray-700">
                <div
                  className="bg-red-500 h-3.5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min((totalFats / goals.fats) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 dark:bg-zinc-800 p-4 rounded-lg shadow-md text-white w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-2">Macronutrient Breakdown</h3>
            <MacronutrientPieChart
              proteins={totalProteins}
              carbs={totalCarbs}
              fats={totalFats}
            />
          </div>
          <div className="bg-zinc-800 dark:bg-zinc-800 p-4 rounded-lg shadow-md text-white w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-2">Set Your Goals</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="calories" className="block mb-1">
                  Calories
                </label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={goals.calories}
                  onChange={handleGoalChange}
                />
              </div>
              <div>
                <label htmlFor="proteins" className="block mb-1">
                  Protein (g)
                </label>
                <input
                  type="number"
                  id="proteins"
                  name="proteins"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={goals.proteins}
                  onChange={handleGoalChange}
                />
              </div>
              <div>
                <label htmlFor="carbs" className="block mb-1">
                  Carbs (g)
                </label>
                <input
                  type="number"
                  id="carbs"
                  name="carbs"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={goals.carbs}
                  onChange={handleGoalChange}
                />
              </div>
              <div>
                <label htmlFor="fats" className="block mb-1">
                  Fats (g)
                </label>
                <input
                  type="number"
                  id="fats"
                  name="fats"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={goals.fats}
                  onChange={handleGoalChange}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-zinc-800 dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-1/5 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Add Food to {selectedMeal}
            </h3>
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 && (
              <ul className="border border-gray-300 rounded max-h-48 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <li
                    key={`${result.food.foodId}_${index}`}
                    className={`p-2 hover:bg-blue-500 text-white cursor-pointer ${
                      selectedFood?.food.foodId === result.food.foodId
                        ? "bg-blue-500"
                        : ""
                    }`}
                    onClick={() => handleFoodSelect(result)}
                  >
                    <div>
                      <span className="font-bold">{result.food.label}</span>
                      <span className="block text-sm">
                        Calories:{" "}
                        {(result.food.nutrients.ENERC_KCAL || 0).toFixed(0)}
                      </span>
                      <span className="block text-sm">
                        Proteins:{" "}
                        {(result.food.nutrients.PROCNT || 0).toFixed(1)}g
                      </span>
                      <span className="block text-sm">
                        Carbs: {(result.food.nutrients.CHOCDF || 0).toFixed(1)}g
                      </span>
                      <span className="block text-sm">
                        Fats: {(result.food.nutrients.FAT || 0).toFixed(1)}g
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={addFoodToMeal}
                disabled={!selectedFood}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionTracker;
