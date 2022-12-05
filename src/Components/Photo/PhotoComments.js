import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";
import { useRef } from "react";

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const commentsSection = useRef();
  const [comments, setComments] = useState(() => props.comments);

  // useEffect(() => {
  //   commentsSection.current.scrollTop = commentsSection.current.scrollHeigth;
  // }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}:</b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>

      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
