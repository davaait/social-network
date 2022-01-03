import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../../redux/state";

let mapStateToProps = (state: stateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (inputValue: string) => {
            let newVar = updateNewPostTextActionCreator(inputValue);
            dispatch(newVar);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)