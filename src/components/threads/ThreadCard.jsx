import styled from "styled-components";
import { Badge } from "../comun/Badge";

import { MdOutlineMessage } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

import Texto from "../comun/Texto";

function time(){
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    return `${hora}:${minutos}`;
}

export function ThreadCard(){
    return (
        <Card>
            <div className="ThreadHeadContent">
                <div className="ImgThread">
                    <MdOutlineMessage/>
                </div>

                <h2>Esto sera un tema de conversacion del foro.</h2>
            </div>

            <div className="ThreadInfoContent">
                <Badge text="Sarah Chen" variant="label"/>
                <Badge text="•" variant="label"/>
                <FaRegClock/>
                <Badge text={time()} variant="label"/>
                <Badge text="•" variant="label"/>
                <Badge text="Development"></Badge>
            </div>

            <div className="ThreadBodyContent">
                <Texto>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque voluptatem enim commodi suscipit placeat? 
                    Consectetur ut tempora dolores dolor.</Texto>
                <div className="ThreadBadges">
                    <Badge text="oziel"/>
                    <Badge text="frederick"/>
                    <Badge text="freddy"/>
                </div>
            </div>


        </Card>
    );
}

const Card = styled.article`
    background-color: ${(props) => props.theme.cardcolor};
    border-radius: 10px;
    width: 90%;               /* ancho máximo de la “card” */
    margin: 16px auto;              /* centrado horizontal */
    padding: 30px 18px;

    .ThreadHeadContent{
        display: flex;
        align-items: center;
        margin: 0 auto;
        .ImgThread{
            padding-right: 20px;
            img{
                width: 56px;
                height: 56px;
            }
        }

        h2{
            color: ${(props) => props.theme.text}
        }

        .ImgThread{
            svg{
                color: ${(props) => props.theme.text};
                height: 60px;
                width: 60px;
            }
        }
    }

    .ThreadInfoContent{

        svg{
            margin-left: 5px;
            color: ${(props) => props.theme.labelcolor};  
        }
    }

    .ThreadBodyContent{

        .ThreadBadges{
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
    }
`;