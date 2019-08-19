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
      {postsList && postsList.map(post => <Post post={post} key={post.id} />)}
    </section>
  );
};

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default PostsList;
