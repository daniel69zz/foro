import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";
import { NavLink } from "react-router-dom";

export function ThreadPage(){
    return (
        <List>
            {flag_threads.map(({to, label}) => (
                <NavLink to={to} key={label}>
                    <ThreadCard/>
                </NavLink>
            ))}
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

    a{
        text-decoration: none;
    }
`;