import { ThreadContent } from "../components/threads/ThreadContent";
import { ThreadCard } from "../components/threads/ThreadCard";
import { comments_post, thread_id} from "../components/utils/data_static";

import { useParams } from "react-router-dom";
import { useState } from "react";

function add_commment(authorId, content){
    const newComment = {
      id: `${hilo.id}c${comments.length + 1}`,
      authorId,
      createdAt: new Date().toISOString(),
      content
    };

    setComments([...comments, newComment]);
}

export function ThreadContentPage(){
    const { id } = useParams();
    const comments = comments_post(id);
    const hilo = thread_id(id);


    return (
        <main>
            <div className="ThreadHeader">
                <ThreadCard thread={false} post={false} {...hilo}/>
            </div>
            
            {
                comments.map(({id, authorId, createdAt, upvotes, content}) => (
                    <ThreadContent content={content} createdAt={createdAt} authorId={authorId}/>
                ))
            }
        </main>
    )
}