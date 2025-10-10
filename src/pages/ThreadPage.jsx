import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";

import { categories, threads } from "../components/utils/data_static"
import { categ_tipo, thread_tipo } from "../components/utils/data_static";

export function ThreadPage({tipo}){
    const categoria = categ_tipo(tipo);
    const hilos = thread_tipo(tipo);

    return (
        
        <List>
            <ThreadCard post={false} imgCard={categoria.icon} title={categoria.title} content={categoria.content} /> 
            {
                hilos.map((f) => (
                    <ThreadCard key={f.id} {...f}/>
                ))
            }

        </List>

    );
}

const List = styled.div`
    width: 100%;
    margin: 24px auto;
    padding: 0 12px;
    display: grid;
`;