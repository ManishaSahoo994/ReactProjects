import Post from "./Post";
import {PostListContext} from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () =>{
   const {postList, addInitialPosts}= useContext(PostListContext);
   //console.log(postList);

   const handleGetPostsClick = () => {
    //console.log("get posts clicked.");
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
        addInitialPosts(data.posts);
    });
   }
    return (
    <>
     {
        postList.length === 0 && (<WelcomeMessage onGetPostsClick={handleGetPostsClick} />
    ) }

    {postList.map((post) => (
        <Post key={post.id} post={post}/>
    ))};
    </>
    );
};
export default PostList;