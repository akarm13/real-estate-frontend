import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DesktopFilter } from "../../components/filters/DesktopFilter";
import { MobileFilter } from "../../components/filters/MobileFilter";

import { InputSearch } from "./InputSearch";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import queryString from "query-string";
import { useGetListingByTitleQuery } from "../../api/endpoints/listings";
import { ListingCard } from "../../components/ListingCard";

import { SearchPayload } from "../../types/listing";
import { removeUnusedQueryParams } from "../../utils/url";
import { Skeleton } from "../../components/skeleton/Skeleton";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";

import { ReactComponent as MapIcon } from "../../assets/icons/search/map.svg";
import { LinkButton } from "../../components/LinkButton";
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

export const Search = () => {
  const [value, setValue] = useState(sortOptions[0].value);
  const [title, setTitle] = useState("");

  // change searchParams from string to number

  const query: SearchPayload = queryString.parse(
    removeUnusedQueryParams(location.search)
  );

  let { data, isLoading, isError, isFetching } = useGetAllListingsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  let { data: SearchByTitle } = useGetListingByTitleQuery(title);

  let listing = data || SearchByTitle;
  if (title) {
    listing = SearchByTitle;
  }

  return (
    <div className="container pt-24">
      <h1 className="my-8 text-3xl font-semibold text-primaryText">Listings</h1>

      <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-search">
        <div className="hidden lg:block">
          <DesktopFilter isLoading={isFetching || isLoading} />
        </div>
        <div className="lg:hidden">
          <MobileFilter isLoading={isFetching || isLoading} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-8">
            <InputSearch title={title} setTitle={setTitle} />
            <LinkButton variant="secondary" to="/map">
              <MapIcon />
            </LinkButton>
          </div>
          <div
            className={`grid grid-cols-1  gap-y-3 pt-4 md:grid-cols-2 md:gap-x-3 xl:grid-cols-3 ${
              isFetching ? "pointer-events-none" : ""
            }`}
          >
            {isLoading || isFetching ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonListingCard key={index} />
                ))}
              </>
            ) : listing?.data !== undefined && listing.data?.length > 0 ? (
              listing?.data.map((property: any) => (
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
