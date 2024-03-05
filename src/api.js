// import {API_URL} from './config'

// const API_KEY = '1'
const API_URL = `https://themealdb.com/api/json/v1/1/`


const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}


const filterByCategories = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName)
    return await response.json();
}


export {getMealById, getAllCategories, filterByCategories}

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772