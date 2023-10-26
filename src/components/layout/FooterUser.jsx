import React from 'react'

const FooterUser = () => {
  return (
    <div>
        <div className='bg-slate-300' style={{height:"100px",overflow:'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height:'100%',width:'100%'}}><path d="M0.00,49.98 C205.13,71.55 349.20,-49.98 502.54,52.80 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#08f"}}></path></svg></div>
        <div className='bg-[#08f] grid justify-center pb-4 '>
            <div className='flex gap-3 -translate-y-5 -top-6'>
            <p>Para registrarse dar click al siguiente link:</p>
            <button className='text-slate-800 underline '>Crear cuenta</button>
            </div>
        </div>
    </div>
  )
}

export default FooterUser