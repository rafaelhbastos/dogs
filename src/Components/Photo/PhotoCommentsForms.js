import React, { useState } from "react";

import {ReactComponent as Send} from '../../Assets/enviar.svg';
import useFetch from './../../Hooks/UseFetch';
import { COMMENT_POST } from './../../api';
import Error from './../Helper/Error';

const PhotoCommentsForms = ({ id, setComments }) => {
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
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Send />
      </button>
      <Error error = {error} />
    </form>
  );
};

export default PhotoCommentsForms;
