import { useState } from "react"
import { POSTS } from "../middleware/InMemoryDb";

let postId = 0;

export default function PostPage() {
  const userId = localStorage.getItem('loggedUser');
  const date = new Date().toDateString();
  const [post, setPost] = useState({postId: ++postId, userId:Number.parseInt(userId), datePosted:date, title:"the", content:"gt"});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setPost((oldData)=>({
      ...oldData,
      [name] : value
    }));
  }

  return (
    <div className="posting-page">
      <form action="" className="post-form" onSubmit={POSTS.push(post)}>
        <input type="text"  className="post-heading" placeholder="Heading" name="title" value={post.title} onChange={handleChange}/>
        <input type="text" className="post-content" placeholder="Post Content" name="content" value={post.content} onChange={handleChange}/>
        <button type="submit">POST</button>
      </form>
    </div>
  )
  
};
