import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function FeedbackForm() {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [review, setReview] = useState("")
  const handleSubmitReview = async e=>{e.preventDefault()}


return (<>
<form action="">
  <div>
  <h3 className="text-[16px] leading-6 font-semibold mb-4">How would you rate the overall experience?*</h3>

    {[...Array(5).keys()].map((_,index)=>{
      index+=1;
      return(

        <button key={index} type="button" className={`${index<= ((rating&&hover)|| hover) ? "text-yellowColor" : "text-grey-400"} bg-transparent border-none outline-none text-[20px] cursor-pointer`}
        onClick={()=> setRating(index) } onMouseEnter={()=> setHover(index)} onMouseLeave={()=> setHover(rating)} onDoubleClick={()=>{ setHover(0); setRating(0)}}>

          <span><AiFillStar/></span>

        </button>
      )
    })}
  </div>

  <div className="mt-5">
  <h3 className="text-[16px] leading-6 font-semibold mb-4"> Share your feedback or suggestion*</h3>
    <textarea onChange={e => setReview(e.target.value)} className="border border-solid border-[#0066ff34] p-2 focus:outline outline-primaryColor w-full rounded-md" placeholder="Write your message..."  rows="5"></textarea>
  </div>
  <div className="text-center"><button onClick={handleSubmitReview} type="submit" className="btn ">Submit Feedback</button></div> 




</form>  

</>


)
}
