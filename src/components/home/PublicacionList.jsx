import React from 'react'
import PublicacionCard from './PublicacionCard'

const PublicacionList = ({publicaciones,deletePost,handleClickUpdatePost}) => {
  return (
    <section className='pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fill,_300px)] max-w-[1500px] mx-auto'>
        {
            publicaciones.map((publicacion) => <PublicacionCard key={publicacion.title} publicacion={publicacion} deletePost={deletePost} handleClickUpdatePost={handleClickUpdatePost}/>)
        }
    </section>
  )
}

export default PublicacionList