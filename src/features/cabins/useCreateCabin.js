import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";

export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isPending: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({ queryKey: ["cabin"] });
        },
        onError: (err) => toast.error(err.message)
    });

    return { isCreating, createCabin };
}
