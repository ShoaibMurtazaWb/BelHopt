import type { RecipesResponse } from "../../lib/recipesTypes";
import api from "../axios";

export default async function fetchRecipes() {

    const { data } = await api.get<RecipesResponse>('/recipes')
    return (data.recipes)

}
