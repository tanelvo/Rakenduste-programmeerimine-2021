import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts() {
    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null);


    useEffect(() => {
        dispatch(updatePosts([
            {
                id: 1,
                title: "Test-prefetched-array-1"
            },
            {
                id: 2,
                title: "Test-prefetched-array-2"
            },
            {
                id: 3,
                title: "Test-prefetched-array-3"
            },
        ]))
    }, [])
    // Või võite panna eraldi nupu, et "Get latest from database" (sync)


    const handleSubmit = e => {
        e.preventDefault()

        
        

        setTitle("")
        if (inputRef.current) inputRef.current.focus() // Lisab cursori tagasi input fieldi peale submiti
    }

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title
        }

        // Salvestame andmebaasi ja kui on edukas, siis teeme dispatchi ja uuendame state lokaalselt

        dispatch(addPost(newPost))
    };


    console.log({ inputRef })
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                <button type="submit">Submit</button>
            </form>

            {state.posts.data.map(e => 
            <li key={e.id}>{e.id} {e.title}
                <span style={{ cursor: "pointer" }}
                onClick={() => dispatch(removePost(e.id))}
                >
                    &#128540;
                </span>
            </li>)}

        </div>
    )
}

export default Posts;