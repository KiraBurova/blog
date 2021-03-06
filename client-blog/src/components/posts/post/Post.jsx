import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.module.scss';

const Post = ({ post, deletePost }) => {
  const { title, body } = post;

  return (
    <div className={styles.post}>
      <h2 className={styles.post__title}>{title}</h2>
      <p className={styles.post__body}>{body}</p>
      <div className={styles.post__delete} onClick={() => deletePost(post._id)}>Delete</div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
};


export default Post;
