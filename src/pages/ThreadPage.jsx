import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";

import { categories, threads } from "../components/utils/data_static"
import { categ_tipo, thread_tipo } from "../components/utils/data_static";

export function ThreadPage({tipo}){
    const categoria = categ_tipo(tipo);
    const hilos = thread_tipo(tipo);

    return (
        
        <List>
            <ThreadCard post={false} imgCard={categoria.icon} {...categoria}/> 


            {/* {threads.map(({categoryId, imgCard, id, title, authorId, createdAt, content, tags}) => 
                categoryId === tipo ? 
                <ThreadCard to={`/threads/${id}`} key={id} title={title} authorId={authorId} createdAt={createdAt} 
                                content={content} tags={tags} imgCard={imgCard}/> : null
            )} */}

            {
                hilos.map((f) => (
                    <ThreadCard {...f}/>
                ))
            }

            {/* <ThreadCard {...hilos}/> */}
        </List>

    );
}

const List = styled.div`
    width: 100%;
    margin: 24px auto;
    padding: 0 12px;
    display: grid;
`;