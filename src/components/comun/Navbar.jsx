import styled from "styled-components";
import Button from "./Button";
import { AiOutlineHome} from "react-icons/ai";
import { LuContactRound } from "react-icons/lu";
import { ImFire } from "react-icons/im";
import {NavLink} from "react-router-dom";
import {v} from "../../styles/Variables";


export function Navbar(){
    return (
        <Container>
            {
                LinksNav.map(({label, icon, to}) => (
                    <div className="NavbarItems" key={label}>
                        <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`:``}`}>
                            <div className="Linkicon">
                                {icon}
                            </div>

                            <span>{label}</span>
                        </NavLink>
                    </div>
                ))
            }

            <Button to="/login" size="lg">Iniciar Sesion</Button>

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
        to: "/contactos"
    },

    {
        label: "Popular",
        icon: <ImFire/>,
        to: "/popular"
    }
]
const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    min-height: 56px;
    gap: 12px;
    padding: 8px 16px;


    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};

    .NavbarItems{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 16px;

        .Links{
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${(props) => props.theme.text};
            .Linkicon{
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;

                svg{
                    font-size: 22px;
                }
            }
            &.active{
                color: ${(props) => props.theme.bg4};
                .Linkicon{
                    svg{
                        color: ${(props) => props.theme.bg4};
                    }
                }
            }
        }
       
    }
`;