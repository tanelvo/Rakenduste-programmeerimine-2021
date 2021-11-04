import { Form, Input, Button, Checkbox } from 'antd';
import { useState} from "react"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const LogUserIn = async (user) => {
        setEmail(user.email)
        setPassword(user.password)

        console.log(user)
    }

return (
    <Form
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={LogUserIn}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
        
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 9, span: 5 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
)
}

export default Login