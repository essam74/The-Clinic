/* eslint-disable react/prop-types */
import { useState } from 'react'
import {AiOutlinePlus ,AiOutlineMinus } from 'react-icons/ai'

export default function FaqItem({item}) {

    const [isOpen , setIsOpen] = useState(false)
    const toggleAcc=()=>{ setIsOpen(!isOpen) }

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer ' onClick={toggleAcc}>
        <div className="flex items-center justify-between gap-5">
            <h4 className='text-[16px] lg:text-[22px] leading-7 lg:leading-8 text-headingColor'>{item.question}</h4>
            <div className={`w-7 h-7 lg:w-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
                {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            </div>
        </div>

        {isOpen && <div className='mt-4'>
            <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>{item.content}</p>
            </div>}
    </div>
  )
}