import styled from "styled-components";
import Input from "../comun/Input";
import { Texto } from "../comun/Texto";
import Button from "../comun/Button";
import Line from "../comun/Line";
import { User, Mail, Lock } from "lucide-react";
import Link from "../comun/Link";
import IconButton from "../comun/IconButton";

export default function LoginCard() {
  return (
    <Card>
      <IconButtonStyled />
      <Texto icono={User}>
        Bienvenido de vuelta
      </Texto>
      <Texto hasAnIcon={false} small>
        Ingresa a tu cuenta para poder interactuar en el foro
      </Texto>
      <Input id="in_email" icon={Mail} placeholderText='Ingresa tu email' labelText="Email" />
      <Input id="in_hash" icon={Lock} placeholderText='Ingresa tu contraseña' labelText="Password" type="password" tipo="tipo1" />
      <LinkStyled href="https://google.com" external>
        La olvidaste?
      </LinkStyled>
      <ButtonContainer>
        <Button data-variant="login" size="login">
          Iniciar Sesion
        </Button>
        <Button data-variant="login" size="login">
          Registrarse
        </Button>
      </ButtonContainer>
      <Line />
     
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body}; 
  color: ${({ theme }) => theme.text};        
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 95%;
`;

const IconButtonStyled = styled(IconButton)`
  margin-left: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
`;

const LinkStyled = styled(Link)`
  font-size: 10px;
  color: ${({ theme }) => theme.textsecondary};
  text-decoration: none;
  margin-top: 10px;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

