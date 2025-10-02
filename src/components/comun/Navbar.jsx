import styled from "styled-components";
import Button from "./Button";
import { AiOutlineHome} from "react-icons/ai";
import { LuContactRound } from "react-icons/lu";
import { ImFire } from "react-icons/im";
import {NavLink} from "react-router-dom";


export function Navbar(){
    return (
        <Container>
            {
                LinksNav.map(({label, icon, to}) => (
                    <div className="NavbarItems" id="label">
                        <NavLink to={to}>
                            <div className="Linkicon">
                                {icon}
                            </div>

                            <span>{label}</span>
                        </NavLink>
                    </div>
                ))
            }

            <Button text="Iniciar Sesion" to="/login" size="lg"></Button>

        </Container>
    );
}

const LinksNav = [
    {
        label: "Home",
        icon: <AiOutlineHome/>,
        to: "/"
    },

    {
        label: "Contactanos",
        icon: <LuContactRound/>,
        to: "/"
    },

    {
        label: "Popular",
        icon: <ImFire/>,
        to: "/"
    }
]
const Container = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};

    .NavbarItems{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a{
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;