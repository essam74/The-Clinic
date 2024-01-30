import { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm.jsx'


export default function Feedback() {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (<>
  <div>
  <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold mb-[30px] mt-[20px]">All reviews (274)</h4>
    </div>
    <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
            <figure className='w-10 h-10 '>
                <img className='w-full' src={avatar} alt="" />
            </figure>

            <div>
                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Wael Mamdouh</h5>
                <p className='text-textColor text-[14px] leading-6'>Feb 14, 2018</p>
                <p className='text_para mt-3 font-medium text-[15px]'>good service, high recommended</p>
            </div>
        </div>
        <div className="flex gap-1">
            {[...Array(5).keys()].map((_,index)=>(<AiFillStar key={index} color="#FEB60D"/>))}
        </div>

    </div>
{!showFeedbackForm &&   (  <div className='text-center'><button onClick={()=>setShowFeedbackForm(true)} className='btn'>Give Feedback</button></div>)}
{showFeedbackForm && <FeedbackForm/>}

  </div>
    
    </> )
}
