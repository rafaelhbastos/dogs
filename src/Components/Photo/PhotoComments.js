import React, { useContext, useState } from "react";

import { UserContext } from "./../../UserContext";
import PhotoCommentsForms from './PhotoCommentsForms';
import styles from '../../CSS/PhotoComments.module.css'
const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  return <div>
    <ul className={styles.comment}>
      {comments.map(comment => <li key={comment.comment_ID}>
        <b>{comment.comment_author}: </b>
        <b>{comment.comment_content} </b>
      </li>)}
    </ul>
    {login && <PhotoCommentsForms id={props.id} setComments={setComments}/>}
  </div>;
};

export default PhotoComments;
