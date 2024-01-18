import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth.js";

export const useLogin = () => {
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: () => {
            navigate("/dashboard");
        },
        onError: (err) => {
            console.log(err);
            toast.error("The provided email or password are incorrect!");
        }
    });

    return { login, isPending };
};
