import { Form, Input, Button} from 'antd';
import { useState} from "react"
function Register() {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const CreateUser = async (user) => {
        setFirst(user.firstname)
        setLast(user.lastname)
        setEmail(user.email)
        setPassword(user.password)
        const data = await fetch('http://localhost:8081/api/auth/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email,
                firstName,
                lastName,
                password
              }),
            })

        const result = await data.json()

        console.log(result)
    }
    


    /*const addNewUser = () => {
        const newUser = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            password
        }

        // Salvestame andmebaasi ja kui on edukas, siis teeme dispatchi ja uuendame state lokaalselt

    }; */


    return(
            <Form
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={CreateUser}
                >
                <Form.Item
                    label="First name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ required: true, message: 'Please input your E-mail!' }]}
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

                <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    )
}


export default Register