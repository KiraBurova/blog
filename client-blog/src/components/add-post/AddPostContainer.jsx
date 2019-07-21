import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/index';
import AddPost from './AddPost';

export const AddPostContainer = () => <AddPost />;

const mapDispatchToProps = dispatch => ({
  addPost: postData => dispatch(addPost(postData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddPost);
