import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";
import { NavLink } from "react-router-dom";

import { categories, threads } from "../components/utils/data_static"

export function ThreadPage({tipo}){
    return (
        
        <List>
            {categories.map(({id, label, description, icon}) => 
                id === tipo ? <ThreadCard post={false} title={label} content={description} imgCard={icon}/> : null
            )}

            {threads.map(({categoryId, avatar_img, id, title, authorId, createdAt, content, tags}) => 
                categoryId === tipo ? 
                <ThreadCard to="/threads" key={id} title={title} authorId={authorId} createdAt={createdAt} 
                                content={content} tags={tags} imgCard={avatar_img}/> : null
            )}
        </List>

    );
}

const List = styled.div`
    width: 100%;
    margin: 24px auto;
    padding: 0 12px;
    display: grid;
`;