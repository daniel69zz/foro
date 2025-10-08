import styled from "styled-components"
import { Avatar, AvatarImage, AvatarFallback } from "../comun/Avatar";

import {v} from "../../styles/Variables";

import { Badge } from "../comun/Badge";
import { Texto } from "../comun/Texto"

function fecha(){
    const mes = new Date().getMonth();
    const dias = new Date().getDate();

    const anio = new Date().getFullYear();
    let flag2 = "0";

    const flag = dias;
    if (!(dias % 10 == flag)){
        flag2 = "";
    }
    switch(mes){
        case 0:
            return `Enero ${dias}`;
        case 1:
            return "Febrero";

        case 2:
            return "Marzo";

        case 3:
            return "Abril";

        case 4:
            return "Mayo";

        case 5:
            return "Junio";
             
        case 6:
            return "Julio";
             
        case 7:
            return "Agosto";
             
        case 8:
            return `Septiembre ${flag2}${dias}, ${anio}`;
             
        case 9:
            return `Octubre ${flag2}${dias}, ${anio}`;
             
        case 10:
            return "Noviembre";
             
        case 11:
            return "Diciembre";
                     
        }
    }

export function ThreadContent(){

    return (
        <Container>
            <div className="ThereadBody">
                <div className="ThreadUserInfo">
                    <Avatar size="xxl" shape="circle" ring user="oziel">
                        <AvatarImage src="ozi.png" alt="Sarah Chen"/>
                        <AvatarFallback>Not Found</AvatarFallback>
                    </Avatar>
                </div>
        
                <Divider/>

                <div className="ThreadContent">
                    <div className="ThreadContentHeader">
                        <Badge text={fecha()} variant="label" pad={false}/>
                    </div>
                    <Texto hasAnIcon={false}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quia. Minus ipsa ratione amet, esse hic corporis soluta rerum vel doloribus quia suscipit, omnis ea quo? A asperiores praesentium repudiandae, accusantium iure earum nulla consectetur, neque molestiae vitae eum reprehenderit?
                    </Texto>

                    <Texto hasAnIcon={false}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto optio expedita repudiandae vitae a incidunt unde iste reprehenderit porro voluptate.
                    </Texto>

                    <Texto hasAnIcon={false}>VIVA EL PSOOOOOOOOOOOOOOOO!!</Texto>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    

    .ThereadBody{
        gap: 20px;
        display: grid;
        grid-template-columns: 10% 1px 1fr;
        background-color: ${(props) => props.theme.cardcolor};
        align-items: center;
        margin: 16px auto;
        border-radius: 10px;
        width: 98%;               
        height: 100%;

        .ThreadUserInfo{
            padding: 20px;
        }

        .ThreadContent{
            color: ${(props) => props.theme.text};
            padding: 20px;
            .ThreadContentHeader{
                display: flex;
                gap: 12px
            }
            
            p{
                margin-bottom: 5px;
            }
        }
    }
`;

const Divider = styled.div`
    width: 3px;
    height: 100%;
    background: ${(props) => props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`;