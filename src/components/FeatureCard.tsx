import { FiSearch } from 'react-icons/fi'
type Props = {
    title: String,
    desc: String,

}


export const VisionCard = ({ title, desc }: Props) => {


    return (
        <div className="bg-white border border-primary-background w-[300px] text-center  flex flex-col items-center gap-y-6 py-[40px] rounded-md ">
            <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
                <FiSearch size={24} className="text-primary-500" />
            </div>
            <h1 className="text-primary-500 font-semibold">{title}</h1>
            <p className="w-10/12 mx-auto text-secondaryText text-sm">{desc}</p>
        </div>
    )


}