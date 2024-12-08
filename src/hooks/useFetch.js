import {useState,  useEffect } from "react"

export function useFetch() {
    const [posts, setPosts] = useState({})

    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()

        setPosts(data)
    }

    useEffect(() => {
        getPosts()
    },[])

    return {posts}

}