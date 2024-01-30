
export default function DoctorAbout() {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About of
            <span className="text-irisBlueColor font-bold text-[22px] leading-9">Mohamed Ahmed</span>
            </h3>
            <p className="text_para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quis voluptatem maiores, earum consectetur cum itaque tenetur molestiae libero 
                iusto repellendus iste fugit omnis nihil veritatis expedita vero voluptatum asperiores?</p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] font-semibold">Education</h3>
            <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold" > 
                            23 April, 2010
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">The Sun Hospital, Cairo</p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold" > 
                            14 September, 2008
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">The Sun Hospital, Cairo</p>
                </li>
            </ul>
        </div>

        
    </div>
  )
}
