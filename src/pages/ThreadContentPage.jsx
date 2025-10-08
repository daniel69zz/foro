import { ThreadContent } from "../components/threads/ThreadContent";
import { ThreadCard } from "../components/threads/ThreadCard";

export function ThreadContentPage(){
    return (
        <main>
            <div className="ThreadHeader">
                <ThreadCard content={false}/>
            </div>
            
            <ThreadContent></ThreadContent>
            <ThreadContent></ThreadContent>
            <ThreadContent></ThreadContent>
        </main>
    )
}