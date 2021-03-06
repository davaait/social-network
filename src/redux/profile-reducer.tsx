const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type PostsStateType = {
    id: number
    message: string
    likesCount: number
}

type profilePageInitialStateType = {
    newPostText: string
    posts: Array<PostsStateType>
}

let initialState = {
    newPostText: "Enter text here",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 8},
        {id: 2, message: "It's my first post", likesCount: 27}
    ],
};

export let profileReducer = (state: profilePageInitialStateType = initialState, action: string) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (inputValue: string) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue});