import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";
import { NavLink } from "react-router-dom";

import { categories, threads } from "../components/utils/data_static"
export function  ThreadPage({tipo}){
    return (
        <List>
            {threads.map(({categoryId, avatar_img, id, title, authorId, createdAt, content, tags}) => 
                categoryId === tipo ? <ThreadCard key={id} title={title} authorId={authorId} createdAt={createdAt} content={content} tags={tags} avatar_img={avatar_img}/> : null
            )}
        </List>

    );
}

const flag_threads = [
    {
        label: "hilo_1",
        to: "/thread1"
    },
    {
        label: "hilo_2",
        to: "/thread2"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    },

    {
        label: "hilo_3",
        to: "/thread3"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    },
    {
        label: "hilo_3",
        to: "/thread3"
    }
]

const List = styled.div`
    width: 100%;
    margin: 24px auto;
    padding: 0 12px;
    display: grid;
`;