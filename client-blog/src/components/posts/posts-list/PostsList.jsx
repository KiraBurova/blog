import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';

import style from './PostsList.module.scss';

const PostsList = ({ fetchPosts, deletePost, postsList }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <section className={style['posts-list']}>
      {postsList && postsList.map(post => <Post post={post} key={post._id} deletePost={deletePost} />)}
    </section>
  );
};

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsList;
