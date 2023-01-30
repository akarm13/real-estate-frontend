import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";

export const HomeSize = () => {
    const isMedium = useMediaQuery({ query: queries.md });

    return (
        <div className="">
            {
                isMedium ? <>
                    <h1 className="mb-4 capitalize text-lg text-primaryText font-semibold brealw">Home Size<span className="text-base ">(metres squared)</span></h1>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-4">

                            <div className="flex items-center justify-between ">
                                <select className="bg-white px-2 py-2 flex gap-x-3 text-gray-600 border-gray-300 w-20 rounded-lg outline-none" name="" id="">
                                    <option value="">Min</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                                <span>-</span>
                                <select className="bg-white px-2 py-2 flex gap-x-3 w-20 text-gray-600 border-gray-300 rounded-lg outline-none items-center" name="" id="">
                                    <option value="">Max</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </> :
                    <select className="bg-white px-2 w-36 py-2 flex gap-x-3 text-gray-600 border-gray-300 md:w-20 rounded-lg outline-none" name="" id="">
                        <option value="">Size Home</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
            }

        </div>
    )
}