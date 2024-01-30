import FaqItem from './FaqItem.jsx'
import {faqs} from '../../assets/data/faqs.js'

export default function FaqList() {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=>(<FaqItem item={item} key={index} />))}
    </ul>
  )
}
