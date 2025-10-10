import styled from "styled-components";
import { Badge } from "../comun/Badge";
import {Texto} from "../comun/Texto";

import { MdOutlineMessage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegClock, FaRegShareFromSquare  } from "react-icons/fa6";
import { useState } from "react";

import { slug_id, hearts_id, messages_id } from "../utils/data_static";
import { hora } from "../utils/time"
import { NavLink } from "react-router-dom";

function valid_icon(img){
    if (typeof img === "function"){
        return true;
    }

    return false;
}

export function ThreadCard({ id, imgCard, title, authorId, createdAt, content, tags, thread = true, post=true, ...props}){
    const Icon = imgCard;
    const [hearts, setHearts] = useState(post ? hearts_id(id) : 0);
    const [messages, setMessages] = useState(post ? hearts_id(id) : 0);


    return (
        <Card $conten={thread}>
            <NavLink to={`/threads/${id}`} key={id}>
                <div className="ThreadHeadContent">
                    <div className="ImgThread">
                        {
                            post ? <img src={imgCard} alt="user" /> : valid_icon(Icon) ? <Icon/> : null 
                        }
                    </div>

                    <h2>{title}</h2>
                </div>
            </NavLink>

            {
                post ? (
                    <>
                        <div className="ThreadInfoContent">
                            <Badge text={authorId} variant="label"/>
                            <Badge text="•" variant="label"/>
                            <FaRegClock/>
                            <Badge text={hora()} variant="label"/>
                            <Badge text="•" variant="label"/>
                            <Badge text={slug_id(id)}></Badge>
                        </div>

                        <div className="ThreadBodyContent">
                            <Texto hasAnIcon={false}>{content}</Texto>
                            <div className="ThreadBadges">
                                {
                                    tags.map((flag) => (
                                        <Badge text={`# ${flag}`}/>
                                    ))
                                }
                            </div>

                            <div className="ThreadInfoIcons">
                                <div className="IconCount">
                                    <MdOutlineMessage />
                                    <button onClick={() => setMessages(c => c+1)}>{messages}</button>
                                </div>
                                
                                <div className="IconCount">
                                    <FaRegHeart />
                                    <button onClick={() => setHearts(c => c+1)}>{hearts}</button>
                                </div>


                                <div className="IconCount">
                                    <a href="https://google.com" target="_blank"><FaRegShareFromSquare /></a>
                                </div>
                            </div>
                        </div>
                        </>
                    ): <Texto hasAnIcon={false}>{content}</Texto>

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

    a{
        text-decoration: none;
    }
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

            img{
                height: 80px;
                width: 80px;
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

            
            button{
                background-color: ${({theme}) => theme.bgtotal};
                all: unset;
            }
            
            .IconCount{
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                font-weight: bold;

                &:hover{
                    color: #1d4070;
                }
                a{
                    text-decoration: none;
                    color: inherit;
                }
            }
            svg{
                height: 50px;
                width: 28px;
            }
        }
        
    }
`;