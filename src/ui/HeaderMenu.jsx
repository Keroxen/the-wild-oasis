import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

import Logout from "../features/authentication/Logout.jsx";
import ButtonIcon from "./ButtonIcon.jsx";

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;
const HeaderMenu = () => {
    const navigate = useNavigate();

    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={navigate("/account")}>
                    <HiOutlineUser />
                </ButtonIcon>
            </li>
            <li>
                <Logout />
            </li>
        </StyledHeaderMenu>
    );
};

export default HeaderMenu;
