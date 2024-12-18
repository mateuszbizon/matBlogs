import { API } from ".";

export async function getUserPosts(userId: string, page: number, sort?: string) {
    const { data } = await API.get(`/posts/get-user-posts/${userId}?page=${page}&sort=${sort}`)

    return data
}

export async function createPost(postData: FormData) {
    const { data } = await API.post("/posts/create-post", postData)

    return data
}

export async function getSinglePost(postSlug: string) {
    const { data } = await API.get(`/posts/get-post/${postSlug}`)

    return data
}

export async function deletePost(postId: string) {
    const { data } = await API.delete(`/posts/delete-post/${postId}`)

    return data
}

export async function editPost({ postData, postId }: { postData: FormData, postId: string }) {
    const { data } = await API.patch(`/posts/update-post/${postId}`, postData)

    return data
}

export async function searchPosts(searchValue: string) {
    const { data } = await API.get(`/posts/search-posts?search=${searchValue}`)

    return data
}