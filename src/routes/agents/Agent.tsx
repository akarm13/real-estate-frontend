import { useMediaQuery } from "react-responsive";
import { useGetAgentQuery } from "../../api/endpoints/user";
import { ReactComponent as StarIcon } from "../../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/listing/location.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { queries } from "../../devices";
import { User } from "../../types/auth";

export const Agent = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });

  const { data, isLoading, isFetching, isError } = useGetAgentQuery();

  return (
    <div className="container pt-32">
      <div className="md: mx-auto flex w-full justify-between rounded-lg bg-searchBackground py-1 px-4 md:mx-0 md:py-2">
        {isSmall ? (
          <>
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparen border-none focus:ring-0 focus:ring-offset-0"
            />
            <SearchIcon className="self-center" />
          </>
        ) : (
          <input
            type="text"
            placeholder="Name"
            className=" w-11/12 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
          />
        )}
      </div>

      <div className="mt-9 flex gap-6 ">
        {data &&
          data.data &&
          data.data.map((person: User) => {
            return (
              <div
                key={person?._id}
                className="rounded-2xl border  bg-white px-4 py-4 "
              >
                <img
                  src={person?.avatar}
                  alt="name"
                  className="h-[190px] w-[300px] rounded-2xl"
                ></img>

                <div className=" mt-2 flex items-center gap-x-2 rounded-lg bg-primary-500 py-2 px-4">
                  <StarIcon width={16} height={16} />
                  <span className="text-sm font-semibold uppercase text-white">
                    {person?.isVerified ? "Verified" : "Not Verified"}
                  </span>
                </div>

                <h1 className="mt-2 font-sans text-lg font-bold capitalize">
                  {person?.fullName}
                </h1>

                <span className="mt-2 flex items-center gap-2">
                  <LocationIcon /> Sulaymaniyah
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
