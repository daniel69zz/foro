import { ThreadContent } from "../components/threads/ThreadContent";
import { ThreadCard } from "../components/threads/ThreadCard";
import { comments_post, thread_id } from "../components/utils/data_static";

import { useParams } from "react-router-dom";

export function ThreadContentPage() {
  const { id } = useParams();
  const comments = comments_post(id);
  const hilo = thread_id(id);

  return (
    <main>
      <div className="ThreadHeader">
        <ThreadCard thread={false} post={false} {...hilo} />
      </div>

      {comments.map(({ id, authorId, createdAt, upvotes, content }) => (
        <ThreadContent
          key={id}
          content={content}
          createdAt={createdAt}
          authorId={authorId}
        />
      ))}
    </main>
  );
}
