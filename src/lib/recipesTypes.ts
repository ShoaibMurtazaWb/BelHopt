// Single recipe
export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string | undefined;
    rating: number;
    reviewCount: number;
    mealType: string[];
};

// API response
export type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};
