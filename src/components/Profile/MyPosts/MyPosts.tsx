import React, {useRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let inputRef = useRef(null);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let inputValue = inputRef.current.value;
        props.updateNewPostText(inputValue);
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={inputRef} value={props.newPostText}/>
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