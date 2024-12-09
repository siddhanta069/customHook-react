import {useState,  useEffect } from "react"

export function usePostsTitle() {
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

export function useFetch(url) {
    const [finalData, setFinalData] = useState({})
    const [loading, setLoading] = useState(true)

    async function getDetails() {
        setLoading(true)
        const data = await fetch(url)
        const json = await data.json()

        setFinalData(json)

        setLoading(false)
    }

    useEffect(() => {
        getDetails()
    }, [url])

    return {finalData, loading}
}