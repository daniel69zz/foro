import styled from "styled-components"
import { ThreadCard } from "../components/threads/ThreadCard";

export function ThreadPage(){
    return (
        <List>
            <ThreadCard/>
            <ThreadCard/>
            <ThreadCard/>
        </List>
    );
}

const List = styled.div`
    width: 80%;
    margin: 24px auto;
    padding: 0 12px;
    display: grid;
`;