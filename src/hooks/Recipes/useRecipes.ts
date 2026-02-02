import { useQuery } from "@tanstack/react-query";
import fetchRecipes from "../../api/Recipes/fetchRecipes";
import type { Recipe } from "../../lib/recipesTypes";

export default function useRecipes() {
    return useQuery({
        queryKey: ["recipes"],
        queryFn: fetchRecipes,

        // ✅ MUST be inside useQuery options
        select: (data): Recipe[] => data,
    });
}
