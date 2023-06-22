import API from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS'
const DELETE_COMMENT = 'DELETE_COMMENT'
const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
    commentsData: []
}

const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                commentsData: action.payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                commentsData: state.commentsData.filter(comment => comment.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                commentsData: [...state.commentsData, action.payload]
            }
        default:
            return state
    }
}

const setComments = (payload) => {
    return {type: SET_COMMENTS, payload}
}

export const deleteCommentRequest = (payload) => {
    return {type: DELETE_COMMENT, payload}
}

export const addMessage = (payload) => {
    return {type: ADD_MESSAGE, payload}
}

export const getCommentsRequest = () => {
    return dispatch => {
        API.getComments().then(response => {
            if (response.status === 200) {
                dispatch(setComments(response.data.comments))
            }
        })
    }
}

export default CommentsReducer