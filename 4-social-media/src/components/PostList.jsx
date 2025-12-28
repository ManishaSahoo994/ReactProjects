import Post from "./Post";
import {PostListContext} from "../store/post-list-store";
import { useContext, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () =>{
   const {postList, addInitialPosts}= useContext(PostListContext);
   //console.log(postList);
   const [dataFetched, setDataFetched]= useState(false);

   if(!dataFetched){
   fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
        addInitialPosts(data.posts);
    });
    setDataFetched(true);
  }

    return (
    <>
     {
        postList.length === 0 && (<WelcomeMessage/>
    ) }

    {postList.map((post) => (
        <Post key={post.id} post={post}/>
    ))};
    </>
    );
};
export default PostList;