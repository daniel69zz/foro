import styled from "styled-components";
import { Badge } from "../comun/Badge";



import img from "../../assets/img_thread.png";

export function ThreadCard(){
    return (
        <Card>
            <div className="ThreadHeadContent">
                <div className="ImgThread">
                    <img src={img}/>
                </div>

                <h2>Esto sera un tema de conversacion del foro.</h2>
            </div>

            <div className="ThreadBodyContent">
                <Badge text="oziel"/>
                <Badge text="frederick"/>
                <Badge text="freddy"/>
            </div>


        </Card>
    );
}

const Card = styled.article`
    background-color: #2675cf;
    border-radius: 10px;
    width: 90%;               /* ancho máximo de la “card” */
    margin: 16px auto;              /* centrado horizontal */
    padding: 12px 16px;

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
            
        }
    }

    .ThreadBodyContent{
        display: flex;
        gap: 12px;
    }
`;