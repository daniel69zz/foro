import styled from "styled-components";
import Input from "../comun/Input";
import { Texto } from "../comun/Texto";
import Button from "../comun/Button";
import Line from "../comun/Line";
import { User, Mail, Lock } from "lucide-react";
import Link from "../comun/Link";
import IconButton from "../comun/IconButton";

export default function RegisterCard() {
  return (
    <ContentLoginCard>
      <IconButton className="botonCerrar" to="/"/>
      <Texto icono={User} className="texto1" iconClassName="icono1">
        Entra a UCB comunity !
      </Texto>
      <Texto hasAnIcon={false} className="texto2">
        Crea una nueva cuenta y entra a la comunidad
      </Texto>
      <Input id="in_email" icon={User} placeholderText="Ingresa tu nombre" labelText="Nombre" className3="input1" />
      <Input id="in_email" icon={Mail} placeholderText="Ingresa tu email" labelText="Email" className3="input1" />
      <Input
        icon={Lock}
        placeholderText="Ingresa tu contraseña"
        labelText="Password"
        type="password"
        className3="input1"
      />
      <Input
        icon={Lock}
        placeholderText="Confirma tu contraseña"
        labelText="Confirm Password"
        type="password"
        tipo="tipo1"
        className3="input1"
      />
      <Line />
      <Button className="boton1" data-variant="login" size="login">
        Crear Cuenta
      </Button>
      <Line />
      <Texto className="texto3"hasAnIcon={false}>Ya tienes una cuenta?</Texto>
      <Button className="boton2" data-variant="login" size="login" to="/login">
        Iniciar Secion
      </Button >
    </ContentLoginCard>
  );
}

const ContentLoginCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 15px 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.loginCard.background};
  color: ${({ theme }) => theme.loginCard.textPrimary};
  border: 1px solid ${({ theme }) => theme.loginCard.border};
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
  .input1{
    background-color: ${({ theme }) => theme.loginCard.buttonBg2};
    border: 1px solid ${({ theme }) => theme.loginCard.border};
  }.input1 svg{
    color: ${({ theme }) => theme.loginCard.textSecondary};
  }

  .texto1 span {
    font-size: 0.88rem;
    font-weight: 500;
    color: ${({ theme }) => theme.loginCard.textPrimary};
  }.texto1 svg{
    color: ${({ theme }) => theme.loginCard.si};
  }

  .texto2 span {
    font-size: 14px;
    color: ${({ theme }) => theme.loginCard.textSecondary};
    margin-bottom: 15px;
  }

  .texto3 span {
    font-size: 13px;
    color: ${({ theme }) => theme.loginCard.textSecondary};
    margin: auto;
    margin-bottom: 5px;
  }

  .link1 {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.loginCard.linkColor};
    text-decoration: none;
    margin-left: auto;
    font-weight: 600;
    margin-bottom: 15px;
    &:hover {
      color: ${({ theme }) => theme.loginCard.linkHover};
    }
  }

  .boton1 {
    background-color: ${({ theme }) => theme.loginCard.buttonBg};
    color: ${({ theme }) => theme.loginCard.buttonText};
    &:hover {
      background-color: ${({ theme }) => theme.loginCard.buttonHover};
    }
  }.boton2 {
    background-color: ${({ theme }) => theme.loginCard.buttonBg2};
    border: 1px solid ${({ theme }) => theme.loginCard.border};
    color: ${({ theme }) => theme.loginCard.si};
    &:hover {
      background-color: ${({ theme }) => theme.loginCard.buttonHover};
      color: ${({ theme }) => theme.loginCard.inputText};

    }
  }
`;
