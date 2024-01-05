import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles.js";

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: var(--color-brand-500);
`;

const Button = styled.button`
    font-size: 1.4rem;
    color: var(--color-indigo-700);
`;

const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <H1>The Wild Oasis</H1>
                <Button>efew fwe fw</Button>
            </StyledApp>
        </>
    );
}

export default App;
