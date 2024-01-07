import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles.js";
import Heading from "./ui/Heading.jsx";
import Button from "./ui/Button.jsx";

const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Heading type={"h1"}>The Wild Oasis</Heading>
                <Heading as={"h2"}>Check in and out</Heading>
                <Heading as={"h3"}>Form</Heading>
                <Button>efew fwe fw</Button>
            </StyledApp>
        </>
    );
}

export default App;
