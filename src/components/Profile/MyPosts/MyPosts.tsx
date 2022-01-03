import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type MyPostsPropsType = {
    id: number
    key: number
    message: string
    likesCount: number
    posts: Array<MyPostsPropsType>
    newPostText: string
    updateNewPostText: (inputValue: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts
        .map((p: MyPostsPropsType) => <Post message={p.message} key={p.id} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}