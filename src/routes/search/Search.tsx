import { Footer } from "../../components/Footer"
import { ListingCard } from "../../components/ListingCard"
import { Property } from "../../types/property";
import { Category } from "./Category";
import { InputSearch } from "./InputSearch"
import { Type } from "./Type";



export const featuredProperties: Property[] = [
    {
        id: "1",
        address: "1234 Main Street",
        area: 1000,
        bathrooms: 2,
        bedrooms: 3,
        price: 1000000,
        status: "featured",
        title: "Beautiful Home",
        type: "sale",
    },
    {
        id: "2",
        address: "4321 Elm Street",
        area: 800,
        bathrooms: 1,
        bedrooms: 2,
        price: 600000,
        status: "new",
        title: "Cozy Apartment",
        type: "rent",
    },
    {
        id: "3",
        address: "5678 Oak Street",
        area: 1200,
        bathrooms: 3,
        bedrooms: 4,
        price: 1500000,
        status: "normal",
        title: "Luxurious Villa",
        type: "sale",
    },
    {
        id: "4",
        address: "8765 Pine Street",
        area: 1100,
        bathrooms: 2,
        bedrooms: 3,
        price: 900000,
        status: "featured",
        title: "Stunning Townhouse",
        type: "rent",
    },
    {
        id: "5",
        address: "2468 Maple Street",
        area: 1400,
        bathrooms: 3,
        bedrooms: 4,
        price: 2000000,
        status: "sold",
        title: "Exclusive Estate",
        type: "sale",
    },
    {
        id: "6",
        address: "3579 Birch Street",
        area: 900,
        bathrooms: 1,
        bedrooms: 2,
        price: 500000,
        status: "normal",
        title: "Affordable Condo",
        type: "rent",
    },
];
export const Search = () => {


    return (

        <div className=" mt-11">
            <div className=" ">
                <div className="flex lg:w-11/12 lg:gap-x-2 md:flex-wrap md:gap-y-6  flex-wrap">
                    <div className="lg:w-1/5  p-8 border-primary-background border-2 flex flex-col gap-y-8 rounded-lg lg:ml-8">

                        <Category />

                        <Type />

                    </div>
                    <div className=" lg:flex-1 md:mx-auto w-11/12 ">
                        {/* top */}
                        <InputSearch />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
                            {featuredProperties.map((property) => (
                                <ListingCard  {...property} key={property.id} />
                            ))}
                        </div>

                    </div>
                </div>


            </div>
            <div className="pt-11">
                <Footer />
            </div>
        </div>
    )
}