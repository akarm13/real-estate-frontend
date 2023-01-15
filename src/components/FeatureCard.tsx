import { FiSearch } from 'react-icons/fi'
type Props = {
    title: String,
    desc: String,

}


export const VisionCard = ({ title, desc }: Props) => {


    return (
        <div className="bg-white border border-gray-400 w-[300px] text-center  flex flex-col items-center gap-y-6 py-[40px] rounded-md ">
            <div className="bg-[#5B4DFF1A] w-[50px] h-[50px] flex items-center justify-center rounded-md">
                <FiSearch size={25} className="text-[#5B4DFF]" />

            </div>
            <h1 className="text-[#5B4DFF] font-semibold">{title}</h1>
            <p className="w-10/12 mx-auto text-[#4D5461] text-sm">{desc}</p>
        </div>
    )


}