
export default function SidePanel() {
  return (
    <div className="shadow-panelShadow p-3 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text_para mt-0 font-semibold">Ticket Price</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold"  >500 EGP</span>
        </div>
        <div className="mt-[30px]">
            <p className="text_para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
            <ul className="mt-3">
                <li className="flex  items-center justify-between mb-2">
                    <p className=" text-[15px] text-textColor font-semibold" >Sunday</p>
                    <p className="text-[15px] text-textColor font-semibold">4:00 PM - 9:30 PM</p>
                </li>
                <li className="flex  items-center justify-between mb-2">
                    <p className=" text-[15px] text-textColor font-semibold" >Monday</p>
                    <p className="text-[15px] text-textColor font-semibold">6:00 PM - 8:30 PM</p>
                </li>
                <li className="flex  items-center justify-between mb-2">
                    <p className=" text-[15px] text-textColor font-semibold" >Tuesday</p>
                    <p className="text-[15px] text-textColor font-semibold">4:00 PM - 9:30 PM</p>
                </li>
                <li className="flex  items-center justify-between mb-2">
                    <p className=" text-[15px] text-textColor font-semibold" >Friday</p>
                    <p className="text-[15px] text-textColor font-semibold">6:00 PM - 11:30 PM</p>
                </li>
            </ul>
        </div>
        <button className="btn w-full rounded-md px-2">Book Appointment</button>
</div>
  )
}
