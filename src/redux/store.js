import {applyMiddleware, combineReducers, createStore} from "redux";
import CommentsReducer from "./CommentsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    comments: CommentsReducer
})


const store = createStore(reducers, applyMiddleware(thunk))

export default store