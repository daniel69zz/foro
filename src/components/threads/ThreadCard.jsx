import styled from "styled-components";
import { Badge } from "../comun/Badge";

import { MdOutlineMessage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegClock, FaRegShareFromSquare  } from "react-icons/fa6";

import {Texto} from "../comun/Texto";

import { hora } from "../utils/time"

export function ThreadCard({content = true}){
    return (
        <Card $conten={content}>
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
                <Badge text={hora()} variant="label"/>
                <Badge text="•" variant="label"/>
                <Badge text="Development"></Badge>
            </div>

            {
                content && (
                    <div className="ThreadBodyContent">
                        <Texto hasAnIcon={false}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque voluptatem enim commodi suscipit placeat? 
                            Consectetur ut tempora dolores dolor.</Texto>
                        <div className="ThreadBadges">
                            <Badge text="# oziel"/>
                            <Badge text="# frederick"/>
                            <Badge text="# freddy"/>
                            <Badge text="# chalco"/>
                        </div>

                        <div className="ThreadInfoIcons">
                            <div className="IconCount">
                                <MdOutlineMessage />
                                <span>32</span>
                            </div>
                            
                            <div className="IconCount">
                                <FaRegHeart />
                                <span>19</span>
                            </div>


                            <div className="IconCount">
                                <FaRegShareFromSquare />
                            </div>
                        </div>
                    </div>
                )
            }
            


        </Card>
    );
}

const Card = styled.article`
    background-color: ${(props) => props.theme.cardcolor};
    border-radius: 10px;
    width: ${({$conten}) => $conten ? "90%" : "98%"};               
    margin: 16px auto;              /* centrado horizontal */
    padding: 30px 18px;

    .ThreadHeadContent{
        display: flex;
        align-items: center;
        margin: 0 auto;


        h2{
            color: ${(props) => props.theme.text}
        }

        .ImgThread{
            padding-right: 20px;
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

        .ThreadInfoIcons{
            color: ${(props) => props.theme.text};

            margin-top: 8px;
            display: flex;
            gap: 30px;

            .IconCount{
                display: flex;
                align-items: center;
                gap: 6px;
                font-weight: bold;

            }
            svg{
                height: 50px;
                width: 28px;
            }
        }
        
    }
`;