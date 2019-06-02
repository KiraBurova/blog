import React from 'react';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';

const Settings = () => (
  <Form>
    <Input type="text" placeholder="Login" />
    <Input type="text" placeholder="Email" />
    <Input type="text" placeholder="New password" />
    <Input type="text" placeholder="Repeat password" />
    <Input type="text" placeholder="Old password" />
    <Button type="button" text="Save Settings" />
  </Form>
);

export default Settings;
