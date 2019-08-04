import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../redux/actions/index';
import PostsList from './PostsList';

export const PostsListContainer = () => <PostsList />;

const mapStateToProps = state => ({
  postsList: state.post.postsList,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: postsData => dispatch(fetchPosts(postsData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);
