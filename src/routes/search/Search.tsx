import { ListingCard } from "../../components/ListingCard";

import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DesktopFilter } from "../../components/filters/DesktopFilter";
import { MobileFilter } from "../../components/filters/MobileFilter";

import { InputSearch } from "./InputSearch";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import queryString from "query-string";

import { SearchPayload } from "../../types/listing";
import { removeUnusedQueryParams } from "../../utils/url";
import { Skeleton } from "../../components/skeleton/Skeleton";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

export const Search = () => {
  const [value, setValue] = useState(sortOptions[0].value);

  // change searchParams from string to number

  const query: SearchPayload = queryString.parse(
    removeUnusedQueryParams(location.search)
  );

  const { data, isLoading, isError, isFetching } = useGetAllListingsQuery(
    query,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 lg:grid-cols-search gap-x-8">
        <div className="hidden lg:block">
          <DesktopFilter isLoading={isFetching || isLoading} />
        </div>
        <div className="lg:hidden">
          <MobileFilter isLoading={isFetching || isLoading} />
        </div>

        <div className="flex flex-col">
          <InputSearch />
          <div
            className={`grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ${
              isFetching ? "pointer-events-none" : ""
            }`}
          >
            {isLoading || isFetching ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonListingCard key={index} />
                ))}
              </>
            ) : data?.data !== undefined && data.data?.length > 0 ? (
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
