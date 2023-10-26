import React, { useEffect, useState } from 'react'
import ModalForm from '../components/home/ModalForm'
import PublicacionList from '../components/home/PublicacionList'
import axios from 'axios'
import { EMPTY_FORM_VALUES, usePostInfo, useUserInfo } from '../components/shared/constants'
import store from '../store'

    const BASE_URL = "https://jsonplaceholder.typicode.com/"

const Users = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const posts = usePostInfo((store) => store.posts)
    const [isPublicacionToUpdate, setIsPublicacionToUpdate] = useState(null)
    const [publicaciones, setPublicaciones] = useState([])

    const getAllPost = () => {
        axios
        .get(BASE_URL + "posts/")
        // https://jsonplaceholder.typicode.com/posts
        .then(({data}) => setPublicaciones(data))
        .catch((err) => console.log(err))
    }

    const createPost = (e) => {
        // e.preventDefault()
        const newPost = Object.fromEntries(new FormData(e.target))
        newPost.posts = posts
        axios
        .post(BASE_URL + "posts/", newPost)
        .then(({data}) => { 
            getAllPost()
            setIsShowModal(false)
            // e.target.reset(EMPTY_FORM_VALUES)
        })
        .catch((err) => console.log(err))
    }

    const deletePost = (idPost) => {
        axios
        .delete(BASE_URL + `posts/${idPost}/`)
        .then(({data}) => {
            getAllPost()
        })
        .catch((err) => console.log(err))
    }

    const updatePost = (postUpdated, reset) => {
        axios
        .patch(BASE_URL + `posts/${isPublicacionToUpdate.id}`,postUpdated)
        .then(({data}) => {
            console.log(postUpdated);
            getAllPost()
            setIsShowModal(false)
            reset(EMPTY_FORM_VALUES)
            setIsPublicacionToUpdate(null)
        })
        .catch((err) => console.log(err))
    }

    const handleClickUpdatePost = (post) => {
        setIsShowModal(true)
        setIsPublicacionToUpdate(post)
    }

    const handleClickOpenModal = () => {
        setIsShowModal(true)
    }

    useEffect(() => {
        getAllPost()
    }, [])


  return (
    <section>
        <header className='bg-black text-white justify-between grid grid-cols-2'>
            <h3 className='text-4xl p-4 '>EmpresaTec</h3>
            <div className='flex justify-end pr-14 text-2xl'>
            <button><i className='bx bx-menu'></i></button>
            </div>
        </header>
        <div className='flex flex-col justify-between p-16 sm:flex-row'>
            <h2 className='font-bold text-5xl tracking-wider  '>Publicaciones</h2>
            <button className='bg-[#555A88] text-white p-4 mt-4 sm:mt-0' onClick={handleClickOpenModal}><i className='bx bx-plus pr-2 pl-0 sm:pl-4'></i>Crear publicacion</button>
        </div>
        <ModalForm isShowModal={isShowModal} createPost={createPost} isPublicacionToUpdate={isPublicacionToUpdate} updatePost={updatePost} setIsPublicacionToUpdate={setIsPublicacionToUpdate} setIsShowModal={setIsShowModal}/>
        <PublicacionList publicaciones={publicaciones} deletePost={deletePost} handleClickUpdatePost={handleClickUpdatePost}/>
    </section>
  )
}

export default Users