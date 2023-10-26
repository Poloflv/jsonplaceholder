import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { EMPTY_FORM_VALUES } from '../shared/constants' 

const ModalForm = ({isShowModal,createPost, isPublicacionToUpdate, updatePost,setIsPublicacionToUpdate,setIsShowModal}) => {

    const {handleSubmit,register, reset,formState: {errors}} = useForm()

    const submit = (data) => {
        data.userId = 1
        if(isPublicacionToUpdate ){
            updatePost(data,reset)
            console.log(data);
        }else{
            createPost(data,reset)
            console.log("creado");
        }
    }

    const handleClickCloseModal = () => {
        setIsShowModal(false)
        reset(EMPTY_FORM_VALUES)
        setIsPublicacionToUpdate(null)
    }

    useEffect(() => {
        if(isPublicacionToUpdate){
            reset(isPublicacionToUpdate)
        }
    }, [isPublicacionToUpdate])
    
  return (
<section className={`fixed z-10 top-0 bottom-0 right-0 left-0 bg-black/60 flex justify-center items-center transition-[opacity_transform] duration-300 ${isShowModal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}  `}>
    <form onSubmit={handleSubmit(submit)} action="" className='bg-white grid gap-4 p-4 rounded-md w-[419px] max-w-[419px] relative'>
        <button type='button' onClick={handleClickCloseModal}  className='font-bold absolute top-4 right-4 bg-slate-400/20  px-[9px] pb-1 rounded-full hover:bg-slate-400/80 transition-colors'>x</button>
        <h2 className='font-bold text-3xl text-[#0F0F2D]'>{isPublicacionToUpdate ? "Editar Publicacion" : "Nueva Publicacion"}</h2>
        <div className='grid'>
            <label htmlFor="title">Titulo</label>
            <input placeholder='Juan Carlos' className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='title' type="text"  {...register("title",{
            required: true
        })}/>
            {errors.title && <p className='text-red-500 text-sm'>Este campo es requerido</p>}
        </div>
        <div className='grid'>
            <label htmlFor="body">Cuerpo</label>
            <textarea placeholder='Polo Benavides' rows={10} className='outline-none border-[1px] border-[#C3C1C1] p-3 rounded-[6px]' id='body' type="text"  {...register("body",{
                required:true
            })}/>
            {errors.body && <p className='text-red-500 text-sm'>Este campo es requerido</p>}
        </div>
        




        <button className='bg-[#555A88] text-[#FFFFFF] animated flash p-4'>{isPublicacionToUpdate ? "Guardar cambios" : "Agregar publicacion"}</button>
    </form>
</section>
  )
}

export default ModalForm