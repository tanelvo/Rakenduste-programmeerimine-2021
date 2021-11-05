import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext } from "react"
import { loginUser } from '../store/actions';
import { Context } from '../store';

function Login({userState}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [state, dispatch] = useContext(Context)

    const LogUserIn = async (u) => {
        setEmail(u.email)
        setPassword(u.password)

        const user = {
          email,
          password
        }
        const response = await fetch('http://localhost:8081/api/auth/login', {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user),
          method: 'POST',
        })

        const data = await response.json()
        if (data.token) {
          dispatch(loginUser(data))
          userState.push("/posts")
        }
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