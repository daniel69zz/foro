import styled from "styled-components";
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {v} from "../../styles/Variables";
import logo from "../../assets/fondo_v3.png";

import { links_nav } from "../utils/data_static";

export function Navbar() {
    const links_ = links_nav();
    return (
        <Container>
            <div className="LogoContent">
                <div className="imgContent">
                    <img src={logo} alt="nose"/>
                </div>
                <h2>UCB COMMUNITY</h2>
            </div>
            {
                links_.map(({label, Icon, to}) => (
                    <div className="NavbarItems" key={label}>
                        <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`:``}`}>
                            <div className="Linkicon">
                                <Icon/>
                            </div>

                            <span>{label}</span>
                        </NavLink>
                    </div>
                ))
            }

           <div className="Buttons">
                <Button size="lg" to="/login">Iniciar Sesion</Button>
           </div>

        </Container>
    );
}

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

    .LogoContent{
        display:none;
    }

    @media (max-width: 768px) {
        .NavbarItems {
            display: none;
        }

        .LogoContent{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: ${v.lgSpacing};
            padding-top: 20px;
            gap: 10px;
        }
        
        .Buttons{
            margin-left: 100px;
        }
        
    }
`;