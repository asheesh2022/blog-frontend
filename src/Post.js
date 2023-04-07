import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import "./Post.css"

export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (

<> 

<div className="blog-post">

<Link to={`/post/${_id}`}>
    <img className="blog-post-image" src={'https://blog-backend-tvt7.onrender.com/'+cover} alt="cover" />
    </Link>

    <div className="blog-post-header">
    <Link to={`/post/${_id}`}>
      <h1 className="blog-post-title">{title}</h1>
    </Link>

      {/* <p className="blog-post-meta">{post.date} {post.time} by {post.email}</p> */}
      <p className="blog-post-meta"> {author.username}</p>
    </div>
    <div className="blog-post-content">
      {/* <p>{post.description}</p> */}
      <p>{summary}</p>
    </div>
  </div>


 </>

  );
}