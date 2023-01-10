import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Button onClick={() => setModalOpen(true)}>LOGIN</Button>
      <Modal title='Login' centered open={modalOpen} onCancel={() => setModalOpen(false)} footer={null}>
        <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button type='link'>Forgot password</Button>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            Or <Button type='link'>register now!</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Login;
