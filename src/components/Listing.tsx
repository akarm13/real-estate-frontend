import { ListingCard } from "./ListingCard"

export const Listing = () => {
    return (
        <div className="max-w-7xl mx-auto pt-14">
            <h1 className="font-semibold text-2xl text-[#120F33]">Featured Listings</h1>
            <h4 className="text-secondaryText text-sm">Discover the best properties</h4>

            <div className="flex gap-x-14 flex-wrap gap-y-10 pt-10">
                <ListingCard />
                <ListingCard />
                <ListingCard />


            </div>
        </div>
    )
}