import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/actions/index';
import AddPost from './AddPost';

export const AddPostContainer = () => <AddPost />;

const mapStateToProps = state => ({
  messages: state.post.messages,
});

const mapDispatchToProps = dispatch => ({
  addPost: postData => dispatch(addPost(postData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPost);
