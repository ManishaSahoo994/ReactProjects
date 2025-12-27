import { createContext, useReducer } from "react";
import PostList from "../components/PostList";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
      newPostList = currPostList.filter(post => post.id !== action.payload.postId);
    }
    return newPostList;
}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {

    };

    const deletePost = (postId) =>{

        //console.log(`delete post called for:${postId}`);
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
    };

    return (<PostListContext.Provider value={
        {postList: postList,
        addPost: addPost,
        deletePost: deletePost} //or {postList,addPost,deletePost}

    }>{children}</PostListContext.Provider>
);
};

const DEFAULT_POST_LIST = [
    {
    id: '1',
    title:'Going to Mumbai',
    body:'Hi friends, I am going to mumbai for my vacations. Hope to enjoy alot. Peace out.',
    reactions: 2,
    userId: 'user-6',
    tags: ['vacation', 'Mumbai', 'Enjoying'],
    },
    {
    id: '2',
    title:'Pass ho vai',
    body:'after enjoying 4 years, i also passed the exam. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable'],
    },
];

export default PostListProvider;