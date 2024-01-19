import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    // 1. Load the authenticated user
    const { user, isLoading, isAuthenticated } = useUser();

    // 2. If there is no authenticated user, redirect to /login
    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate("/login");
        }
    }, [isAuthenticated, isLoading, navigate]);


    // 3. While loading, show a spinner
    if (isLoading) {
        return <FullPage>
            <Spinner />
        </FullPage>;
    }

    // 4, If there is a user, render the app
    if (isAuthenticated) {
        return (
            children
        );
    }
};

export default ProtectedRoute;