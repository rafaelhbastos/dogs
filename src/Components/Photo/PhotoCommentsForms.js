import React, { useState } from "react";

import {ReactComponent as Send} from '../../Assets/enviar.svg';
import useFetch from './../../Hooks/UseFetch';
import { COMMENT_POST } from './../../api';
import Error from './../Helper/Error';
import styles from '../../CSS/PhotoCommentsForm.module.css'

const PhotoCommentsForms = ({ id, setComments, single }) => {
  const {request, error} = useFetch()
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error = {error} />
    </form>
  );
};

export default PhotoCommentsForms;
