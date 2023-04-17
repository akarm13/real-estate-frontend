import { useMediaQuery } from "react-responsive";
import { useGetAgentQuery } from "../../api/endpoints/user";
import { ReactComponent as StarIcon } from "../../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/listing/location.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { queries } from "../../devices";
import { User } from "../../types/listing";

export const Agent = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });

  const { data, isLoading, isFetching, isError } = useGetAgentQuery();

  return (
    <div className=" ml-24 mt-9">
      <div className="bg-searchBackground py-1 md:py-2 md: px-4 w-full mx-auto md:mx-0 lg:w-[1370px] rounded-lg flex justify-between">
        {isSmall ? (
          <>
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparent w-[1000px] border-none focus:ring-0 focus:ring-offset-0"
            />
            <SearchIcon className="self-center" />
          </>
        ) : (
          <input
            type="text"
            placeholder="Name"
            className=" bg-transparent w-11/12 border-none focus:ring-0 focus:ring-offset-0"
          />
        )}
      </div>

      <div className="flex mt-9 gap-6 ">
        {data &&
          data.data &&
          data.data.map((person: User) => {
            return (
              <div
                key={person?._id}
                className=" bg-white border  px-4 py-4 rounded-2xl "
              >
                <img
                  src={person?.avatar}
                  alt="name"
                  className="rounded-2xl w-[300px] h-[190px]"
                ></img>

                <div className=" bg-primary-500 flex  w-[120px]  items-center gap-x-2 py-2 px-4 mt-2 rounded-lg">
                  <StarIcon width={16} height={16} />
                  <span className="text-white uppercase text-sm font-semibold">
                    {person?.isVerified ? "Verified" : "Not Verified"}
                  </span>
                </div>

                <h1 className="mt-2 font-sans text-lg font-bold capitalize">
                  {person?.fullName}
                </h1>

                <span className="flex gap-2 items-center mt-2">
                  <LocationIcon /> Sulaymaniyah
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
