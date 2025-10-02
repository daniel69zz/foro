import styled from "styled-components";
import Button from "./Button";

export function Navbar(){
    return (
        <Container>
            <div className="NavbarItems">
                <a href="">Home</a>
                <a href="">Contactanos</a>
                <a href="">Sobre Nosotros</a>
                <a href="">Popular</a>
                <Button text="Iniciar Sesion"></Button>
            </div>
        </Container>
    );
}

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
    }
`;