import { useContext, useState, useRef, useEffect } from "react"
import {Link} from 'react-router-dom'
import { Context } from "../store"
import {Table} from 'antd'
import { addPost, removePost, updatePosts } from "../store/actions"
import { Form, Input, Button, Space } from 'antd';
import { useHistory } from "react-router-dom";


function ShowPosts() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null);
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([])

    function editPost(/* id */){
            history.push("/post-edit" /* +id */);
        }
    // Tabelite nimed
    const columns = [
        {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        },
        {
        title: 'Text',
        dataIndex: 'text',
        key: 'text',
        },
        {
        title: 'Author',
        dataIndex: 'user',
        key: 'user',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            <Space size="middle">
                <button onClick={editPost /* id */}>Edit </button>
                <button>Delete</button>
            </Space>
            )
        }
    ];
    

    const handleSubmit = e => {
        e.preventDefault()

        setTitle("")
        setAuthor("");
        if (inputRef.current) inputRef.current.focus() // Lisab cursori tagasi input fieldi peale submiti
    }

    const newPost = async (post) => {
        setTitle(post.title)
        setText(post.text)
        setAuthor(post.author)
        const data = await fetch('http://localhost:8081/api/post/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
        method: 'POST',
        })
                const result = await data.json()
                dispatch(addPost(result))
    }

    // Ajutine laisk lahendus, et tabelit refreshida ;_;
    function refreshPage() {
        window.location.reload(false);
      }

    function editPost(){

    }

    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedPosts(data);
            console.log(loadedPosts);
        });
    }, [])

    if (isLoading) {
        return (
            <div>Posts are loading..</div>
        )
    }
    return (
        <>
            <div id="posts" style={{ textAlign: "center" }}>
                <h1>Add Post</h1>
                <Form
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={newPost}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please enter post title' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Text"
                        name="text"
                        rules={[{ required: true, message: 'Please enter post text' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
                        <Button type="primary" htmlType="submit" onClick={refreshPage}>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>   
                <br/>
            </div>
            <div className="container">
                <Table dataSource={loadedPosts} columns={columns} rowKey="_id">

                </Table>
            </div>
        </>
    )
}

export default ShowPosts