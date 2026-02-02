import useRecipes from "../../hooks/Recipes/useRecipes";
import RecipeCard from "./RecipeCard";

export default function RecipesPage() {
    const { data: recipes = [], isLoading, isError } = useRecipes();

    if (isLoading) return <p>Loading recipes...</p>;
    if (isError) return <p>Failed to load recipes</p>;

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}
