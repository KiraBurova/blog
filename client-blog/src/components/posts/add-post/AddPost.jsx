import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from '../../ui/form/Form';
import Button from '../../ui/button/Button';
import Textarea from '../../ui/textarea/Textarea';
import Input from '../../ui/input/Input';
import Alert from '../../ui/alert/Alert';

import styles from './AddPost.module.scss';

const AddPost = ({ addPost, messages, history }) => {
  const [postData, setValues] = useState({
    title: '',
    body: '',
  });
  const onUpdateField = e => {
    setValues({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const onAddPost = e => {
    e.preventDefault();
    addPost(postData)
      .then(() => history.push('/'))
      .catch(() => { });
  };
  return (
    <div className={styles['add-post']}>
      <div className={styles['add-post__form']}>
        <Form onSubmit={onAddPost}>
          <Input
            name="title"
            type="text"
            onChange={onUpdateField}
            value={postData.title}
          />
          <Textarea
            name="body"
            placeholder="Your post here"
            onChange={onUpdateField}
            value={postData.body}
          />
          <Button type="submit" text="Add post" />
          <Alert messages={messages} />
        </Form>
      </div>
    </div>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  messages: PropTypes.shape({ message: PropTypes.string }),
  history: PropTypes.shape({}).isRequired,
};

AddPost.defaultProps = {
  messages: {},
};

export default AddPost;
