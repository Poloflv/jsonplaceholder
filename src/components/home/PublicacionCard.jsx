import React from 'react'

const PublicacionCard = ({publicacion,deletePost,handleClickUpdatePost}) => {
  return (
    <article className='border-[1px] bg-slate-400/20 z-0 border-[#E5E5E5] p-4 rounded-md blur-in-expand hover:bg-slate-400/30 transition-colors shadow-lg'>
        <ul>
            <li className='font-medium text-2xl text-[#0F0F2D]'>{publicacion.title +" " + publicacion.title}</li>
            <li className='text-[#b6b6b6] font-normal text-base mt-4'>Cuerpo <br /> <span className='text-[#302F2F]'>{publicacion.body}</span></li>
        </ul>
        <div className='py-3'>
        <hr/>
        </div>
        <section className='flex justify-end'>
          <button onClick={()=>deletePost(publicacion.id)} className='bg-[#D85D5D] p-4 rounded-md shake'><i className='bx bx-trash text-white '></i></button>
          <button onClick={()=>handleClickUpdatePost(publicacion)} className='bg-[#BDBDBD] jello ml-2 p-4 rounded-md'><i className='bx bx-pencil' ></i></button>
        </section>
    </article>
  )
}

export default PublicacionCard