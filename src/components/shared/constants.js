import { set } from "react-hook-form"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const EMPTY_FORM_VALUES = {
    id:1,
    title: "",
    body: "",
    userId:1
}

const INITIAL_STATE = {
    email: "",
    name: "",
}

export const usePostInfo = create(persist((set) => ({
    info: {
        title: "",
        body:""
    },
    posts: [],
    addPost: (newPost) => {
        const {posts} = get()
        const isPostAlreadyAdded = posts.some((post) => post.id === newPost.id)
        if (isPostAlreadyAdded) return
        const newPosts = [...posts, newPost]
        set({posts:newPosts})
    },
}), {
    name: "postInfo"
}))

export const useUserInfo = create(persist((set) => ({
    user: INITIAL_STATE,
    login: (infoLogin) => {
        set({user: infoLogin})
    },
    logout: () => {
        set({user: INITIAL_STATE})
        localStorage.removeItem("userInfo")
    }
}), {
    name: "userInfo"
}))