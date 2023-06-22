import styles from './Comments.module.scss'
import {useDispatch} from "react-redux";
import {deleteCommentRequest} from "../redux/CommentsReducer";
import {memo,useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";

const Comment = memo(({comment}) => {
    const dispatch = useDispatch()
    const [showComment, setShowComment] = useState(true)
    const nodeRef = useRef()

    const deleteComment = () => {
        setTimeout(() => {
            dispatch(deleteCommentRequest(comment.id))
        }, 500)
        setShowComment(false)
    }

    return <CSSTransition
        in={showComment}
        nodeRef={nodeRef}
        timeout={5000}
        classNames={{
            exit: styles.exit,
        }}
        unmountOnExit
    >
        <div className={styles.comment} ref={nodeRef}>
            {comment.body}
            <div className={styles.name}>
                {comment.user.username[0].toUpperCase()}
            </div>
            <div className={styles.username}>
                {comment.user.username}
            </div>
            <div className={styles.button_delete} onClick={deleteComment}>
                <img src="./cross.svg" width={15} height={15} alt=""/>
            </div>
        </div>
    </CSSTransition>

})

export default Comment