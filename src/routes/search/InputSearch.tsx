import { useMediaQuery } from 'react-responsive';
import { ReactComponent as SearchIcon } from '../../assets/icons/listing/search-gray.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/search/location.svg'
import { queries } from '../../devices';


export const InputSearch = () => {
    const isSmall = useMediaQuery({
        query: queries.sm,
    });
    return (
        <div className="flex justify-between items-center">

            <div className="bg-searchBackground p-2 px-4 lg:w-[700px] rounded-lg flex justify-between">
                <select className="bg-white px-4 py-2 flex gap-x-3 w-24 rounded-lg outline-none" >
                    <option className="capitalize" value="rent">Rent</option>
                    <option className="capitalize" value="sale">Sale</option>
                </select>
                <input type="text" placeholder="City or address" className="text-center bg-transparent outline-none" />
                <SearchIcon className="self-center" />
            </div>
            {
                isSmall ? <div className="flex items-center border-primary-background  px-9 py-3 border-2 rounded-lg">
                    <LocationIcon />
                </div> : ''
            }

        </div>
    )
}