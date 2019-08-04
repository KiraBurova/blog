import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';

import style from './PostsList.module.scss';

const PostsList = ({ fetchPosts, postsList }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <section className={style['posts-list']}>
      {postsList && postsList.map(post => <Post post={post} />)}
    </section>
  );
};

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postsList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostsList;
