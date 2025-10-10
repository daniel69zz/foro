// src/components/comun/Footer.jsx
import styled from "styled-components";
import { v } from "../../styles/Variables";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <div className="ucb">
            <h3>UCB Community</h3>
            <p>© {year} UCB Community. Todos los derechos reservados.</p>
        </div>

        <Cols>
            <Col>
                <h4 className="ColTitle">Contacto</h4>
                <div className="Info">
                    <div className="InfoItem">
                        <Mail aria-hidden="true" />
                        <span>luis.rojas.c1@ucb.edu.bo</span>
                    </div>
                    <div className="InfoItem">
                        <Phone aria-hidden="true" />
                        <span>+591 64831282</span>
                    </div>
                    <div className="InfoItem">
                        <MapPin aria-hidden="true" />
                        <span>La Paz, Bolivia</span>
                    </div>
                </div>
            </Col>

            <Col>
                <h4 className="ColTitle">Links</h4>
                <Social>
                    <IconLink href="#" aria-label="GitHub">
                        <Github />
                    </IconLink>
                    <IconLink href="#" aria-label="Twitter">
                        <Twitter />
                    </IconLink>
                    <IconLink href="#" aria-label="LinkedIn">
                        <Linkedin />
                    </IconLink>
                </Social>
            </Col>
        </Cols>
      </Content>

      
    </Container>
  );
}


const Container = styled.footer`
    font-size: 14px;
    block-size: 82px;         
    background-color: ${(p) => p.theme.bg};
    color: ${(p) => p.theme.text};
    border-top: 1px solid rgba(0,0,0,.08);
    margin-top: ${v.mdSpacing}; /* menos espacio arriba del footer */
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 6px 12px;           /* ↓ padding vertical e incrementa un poco el horizontal */
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    gap: 6px;

    .ucb{
        h3{
            font-weight: bold;
            letter-spacing: 0.3px;
            color: ${(p) => p.theme.text};
            margin-bottom: 15px;
        }
    }
`;



const Cols = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
`;

const Col = styled.div`  
  .ColTitle{
    font-weight: bold;
    margin-bottom: 20px;
    color: ${(p) => p.theme.text};
  }
  .Info{
    align-items: center;
    display: flex;
    align-items: center;
    gap: 6px;
    
    .InfoItem{
        display: inline-flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;             
        svg { 
            width: 16px; 
            height: 16px; 
            flex: 0 0 auto; 
            color: ${(p) => p.theme.labelcolor}; 
        }
        span { line-height: 1; }            
    }
    
  }
`;

const Social = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: .5rem;
`;

const IconLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,.1);
    background: transparent;

    svg { width: 16px; height: 16px; color: ${(p) => p.theme.text}; }

`;

