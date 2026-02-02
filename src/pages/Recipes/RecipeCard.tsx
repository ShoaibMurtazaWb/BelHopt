import { useDeleteRecipe } from "../../hooks/Recipes/deleteRecipes";
import type { Recipe } from "../../lib/recipesTypes";


export default function RecipeCard({ recipe }: { recipe: Recipe }) {

    const { mutate } = useDeleteRecipe();

    return (

        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-48 w-full">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
                    ⭐ {recipe.rating}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                <h2 className="text-lg font-bold">{recipe.name}</h2>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span>🍽 {recipe.cuisine}</span>
                    <span>⏱ {recipe.cookTimeMinutes} min</span>
                    <span>🔥 {recipe.caloriesPerServing} cal</span>
                </div>

                {/* Difficulty */}
                <p className="text-sm">
                    Difficulty:{" "}
                    <span className="font-semibold text-green-600">
                        {recipe.difficulty}
                    </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {recipe.tags.map(tag => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3">
                    <span className="text-sm text-gray-500">
                        {recipe.reviewCount} reviews
                    </span>
                    <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
                        View Recipe
                    </button>
                </div>
                <div>
                    <button onClick={() => mutate(recipe.id)} className="hover:cursor-pointer border p-2 rounded">Delete</button>
                </div>
            </div>
        </div>
    );
}
