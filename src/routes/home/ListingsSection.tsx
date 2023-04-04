import { Link } from "react-router-dom";
import { ListingCard } from "../../components/ListingCard";
import { featuredProperties } from "../../dummyData";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import { ClipLoader } from "react-spinners";
import { Listing } from "../../types/listing";
import { useState } from "react";

export const ListingsSection = () => {
  const { data, isLoading, isError } = useGetAllListingsQuery({
    pageNumber: 1,
    pageSize: 10,
  });

  console.log(data?.data);

  return (
    <div className="w-5/6 md: mx-auto mt-24">
      <h1 className="font-semibold text-2xl md:text-3xl text-primary-900">
        Featured Listings
      </h1>
      <h4 className="text-secondaryText text-base md:text-xl font-semibold mt-2">
        Discover the best properties
      </h4>
      {isLoading ? (
        <div className="w-full flex justify-center items-center mt-10">
          <ClipLoader
            color="#36d7b7"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-listing lg:gap-x-4 lg:flex-wrap lg:gap-y-10 mt-16 flex gap-x-4   snap-x overflow-x-auto snap-proximity lg:snap-none">
          {data?.data.map((property) => (
            <Link key={property._id} to={`/listings/${property._id}`}>
              <ListingCard {...property} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
