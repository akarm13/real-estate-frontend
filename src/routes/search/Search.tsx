import { ListingCard } from "../../components/ListingCard";

import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DesktopFilter } from "../../components/filters/DesktopFilter";
import { MobileFilter } from "../../components/filters/MobileFilter";

import { InputSearch } from "./InputSearch";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import queryString from 'query-string';

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

export const Search = () => {
  const [value, setValue] = useState(sortOptions[0].value);
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState<string | null>(searchParams.get("minPrice"));
  const [maxPrice, setMaxPrice] = useState<number>()
  const [minBedrooms, setMinBedrooms] = useState<number>()
  const [maxBedrooms, setMaxBedrooms] = useState<number>()
  const [minBathrooms, setMinBathrooms] = useState<number>()
  const [maxBathrooms, setMaxBathrooms] = useState<number>()
  const [minArea, setMinArea] = useState<number>()
  const [maxArea, setMaxArea] = useState<number>()


  // change searchParams from string to number



  const { data, isLoading, isError } = useGetAllListingsQuery({

    minPrice: minPrice ? +minPrice : undefined,
    maxPrice: maxPrice ? +maxPrice : undefined,
    minBedrooms: minBedrooms ? +minBedrooms : undefined,
    maxBedrooms: maxBedrooms ? +maxBedrooms : undefined,
    minBathrooms: minBathrooms ? +minBathrooms : undefined,
    maxBathrooms: maxBathrooms ? +maxBathrooms : undefined,

  });



  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 lg:grid-cols-search gap-x-8">
        <div className="hidden lg:block">
          <DesktopFilter />
        </div>
        <div className="lg:hidden">
          <MobileFilter />
        </div>

        <div className="flex flex-col">
          <InputSearch />
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
            {data?.data !== undefined && data.data?.length > 0 ? (
              data?.data.map((property) => (
                <Link key={property?._id} to={`/listings/${property?._id}`}>
                  <ListingCard {...property} />
                </Link>
              ))
            ) : (
              <h1>No listings found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
