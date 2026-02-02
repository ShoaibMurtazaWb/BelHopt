import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api/Recipes/recipesAXIOS";
// import api from "./recipesAXIOS";
// import Alert from "../../components/Alert";


export const useDeleteRecipe = () => {
    const queryClient = useQueryClient()
    const deleteRecipe = (id: number | string) => {
        return api.delete(`/posts/${id}`)
    }

    return useMutation({
        mutationFn: (id: number | string) => deleteRecipe(id),
        onSuccess: (_, id) => {
            queryClient.setQueryData(['recipes'], (oldData: any[]) => {
                return oldData?.filter(recipe => recipe.id !== id);
            });
        }
    });
};