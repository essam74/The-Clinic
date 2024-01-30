import { services } from '../assets/data/services.js'
import ServiceCard from '../components/Services/ServiceCard.jsx'

export default function Services() {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] m-5 ">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>  )
}
