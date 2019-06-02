import React from 'react';
import Form from '../ui/form/Form';
import Button from '../ui/button/Button';
import Textarea from '../ui/textarea/Textarea';

import './AddPost.scss';

const AddPost = () => (
  <div className="add-post container">
    <div className="add-post__form">
      <Form>
        <Textarea placeholder="dfd" />
        <Button type="button" text="Save Settings" />
      </Form>
    </div>
    <div class="add-post__preview" />
  </div>
);

export default AddPost;
