import styled from "styled-components";
import logo from "../../assets/fondo_v3.png";
import {AiOutlineLeft, AiOutlineSetting} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiCoffee, FiBookOpen  } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";


import {MdLogout} from "react-icons/md";
import {v} from "../../styles/Variables";
import {NavLink} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export function Sidebar({ sidebarOpen, setSidebarOpen}){
    const ModSidebaropen = () => {
        setSidebarOpen(!sidebarOpen);
    }
    
    const {setTheme, theme} = useContext(ThemeContext);

    const CambiarTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    return (
        <Container $isOpen={sidebarOpen} $themeUse={theme}>
            <button onClick={ModSidebaropen} className="SidebarButton">
                <AiOutlineLeft/>
            </button>
            <div className="LogoContent">
                <div className="imgContent">
                    <img src={logo} alt="nose"/>
                </div>
                <h2>UCB COMUNITY</h2>
            </div>

            {linksArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`:``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {
                            sidebarOpen && (
                                <span>{label}</span>
                            )
                        }
                    </NavLink>
                </div>
            ))}
            <Divider/>
            {secondarylinksArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`:``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {
                            sidebarOpen && (
                                <span>{label}</span>
                            )
                        }
                    </NavLink>
                </div>
            ))}
            <Divider/>
            <div className="Themecontent">
                {
                    sidebarOpen && <span>Modo Oscuro</span>
                }
                <div className="Togglecontent">
                    <div className="grid theme-container">
                        <div className="content">
                            <div className="demo">
                                <label className="switch">
                                    <input type="checkbox" className="theme-swither" onClick={CambiarTheme}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

//#region DATA LINKS
const linksArray = [
    {
        label:"Popular",
        icon:<IoMdTrendingUp/>,
        to: "/"
    },
    {
        label:"Programacion y más",
        icon:<FaLaptopCode/>,
        to: "/development" 
    },
    {
        label:"Gaming",
        icon:<IoGameControllerOutline/>,
        to: "/gaming" 
    },
    {
        label: "General",
        icon: <FiCoffee/>,
        to: "/general"
    },
    {
        label: "Aprender",
        icon: <FiBookOpen/>,
        to: "/learning"
    }
]

const secondarylinksArray = [
    {
        label:"Configuración",
        icon:<AiOutlineSetting/>,
        to: "/configuracion"
    },
    {
        label:"Salir",
        icon:<MdLogout/>,
        to: "/estadisticas" // no existe
    }
   
]
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};
    position: sticky;

    top: 0;
    height: 100dvh;
    /* overflow: auto; */
    min-width: 0;


    .SidebarButton {
        position: absolute;
        top: ${v.xxlSpacing};
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};    
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({$isOpen})  => ($isOpen ? `initial`:`rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
        font-size: inherit;
        text-align: inherit;
        padding: 0;
        font-family: inherit;
        outline: none;

    }

    .LogoContent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${v.lgSpacing};
        padding-top: 20px;

        .imgContent{
            display: flex;
            img {
                max-width: 100%;
                height: auto;
            }
            
            cursor:pointer;
            transition: all 0.3s;
            transform: ${({$isOpen}) => ($isOpen ? `scale(0.7)`:`scale(1.5)`)};
        }

        h2{
           display: ${({$isOpen}) => ($isOpen ? `block`:`none`)}; 
        }
    }

    .LinkContainer{
        align-items: center;
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background-color: ${(props) => props.theme.bg3};
        }

        .Links{
            display: flex;
            align-items: center;
            
            justify-content: ${({$isOpen}) => $isOpen ? "flex-start":"center"};

            text-decoration: none;
            padding: calc(${v.smSpacing} - 2px) 0;
            color: ${(props) => props.theme.text};

            .Linkicon{
                
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;
                svg {
                    font-size: 25px;
                }
            }
            &.active{
                .Linkicon{
                    svg{
                        color: ${(props) => props.theme.bg4};
                    }

                }
                color: ${(props) => props.theme.bg4};

            }
        }
    }

    .Themecontent{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            display: block;
            padding: 10px;
            font-weight: 700;
        }

        .Togglecontent{
            margin: ${({$isOpen}) => ($isOpen ? `auto 40px`:`auto 15px`)};
            height: 20px;
            width: 36px;
            border-radius: 10px;
            transition: all 0.3s;
            position: relative;

            .theme-container{
                background-blend-mode: multiply, multiply;
                transition: 0.4s;
                .grid{
                    display: grid;
                    justify-items: center;
                    align-content: center;
                    /* height: 100vh;
                    width: 100vw; */
                    height: auto;
                    width: auto;

                    font-family: "Lato", sans-serif;
                }

                .demo{
                    font-size: 32px;
                    .switch{
                        position: relative;
                        display: inline-block;
                        width: 60px;
                        height: 34px;
                        .theme-swither{
                            opacity: 0;
                            width: 0;
                            height: 0;

                            &:checked +.slider:before{
                                left: 4px;
                                content: "🌑";
                                transform: translateX(26px);
                            }
                        }
                        .slider{
                            position: absolute;
                            cursor: pointer;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: ${({$themeUse}) => ($themeUse === "light" ? v.lightcheckbox : v.checkbox)};
                            transition: 0.4s;
                            &::before{
                                position: absolute;
                                content: "☀️";
                                height: 0px;
                                width: 0px;
                                left: -10px;
                                top: 16px;
                                line-height: 0px;
                                transition: 0.4s;

                            }              
                            &.round{
                                border-radius: 34px;
                                &:before{
                                    border-radius: 50%;
                                }
                            }          
                        }
                    }
                }
            }
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
//#endregion



