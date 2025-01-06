import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <p className="card-text">{post.body}</p>
        <span className="tag">Tags: </span>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary sp-text tags">
            {tag}
          </span>
        ))}
        <div className="bdg-1">
          <span>Number of People Liked: </span>
          <span className="badge text-bg-primary like">
            {post.reactions.likes}
          </span>
        </div>
        <div className="bdg-2">
          <span>Number of People Disliked: </span>
          <span className="badge text-bg-primary dislike">
            {post.reactions.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
