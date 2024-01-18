import supabase from "./supabase.js";

export const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const getCurrentUser = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    // it is more secure to get the user from supabase again instead of session
    const { data, error } = await supabase.auth.getUser();

    console.log(data);

    if (error) {
        throw new Error(error.message);
    }

    return data?.user;
};
