import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, getCommentsRequest} from "../redux/CommentsReducer";
import Comment from "./Comment";
import styles from './Comments.module.scss'

const Main = () => {
    const commentsData = useSelector(state => state.comments.commentsData)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    useEffect(() => {
        dispatch(getCommentsRequest())
        const textValue = localStorage.getItem('textarea_value')
        if (textValue) {
            setText(textValue)
        }
    }, [dispatch])

    const onChange = (e) => {
        localStorage.setItem('textarea_value', e.target.value);
        setText(e.target.value)
    }

    const sendMessageRequest = () => {
        dispatch(addMessage({
            id: commentsData.length + 1,
            body: text,
            postId: Math.random(),
            user: {id: 250, username: 'kryak'}
        }))
        localStorage.setItem('textarea_value','');
        setText('')
    }

    return <div className={styles.main_wrapper}>
        <div className={styles.comments_wrapper}>
            {commentsData.map(comment => {
                return <Comment key={comment.id} comment={comment}/>
            })}
        </div>
        <div className={styles.textarea_wrapper}>
            <textarea className={styles.textarea} placeholder={'Enter your comment'} onChange={onChange}
                      value={text}/>
            <button className={styles.button_send} onClick={sendMessageRequest}>Send</button>
        </div>
    </div>
}

export default Main