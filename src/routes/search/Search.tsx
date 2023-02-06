import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/Button";
import { ListingCard } from "../../components/ListingCard";
import { queries } from "../../devices";
import { Category } from "./Category";
import { HomeSize } from "./HomeSize";
import { InputSearch } from "./InputSearch";
import { NumOfRoom } from "./NumOfRoom";
import { RangePrice } from "./RangePrice";
import { Type } from "./Type";

import { Link } from "react-router-dom";
import { featuredProperties } from "../../dummyData";

export const Search = () => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 md:grid-cols-search gap-x-8">
        {isMedium ? (
          <div className="py-8 px-5 border-primary-background border-2 flex flex-col gap-y-8 rounded-lg">
            <Category />
            <Type />
            <hr />
            <RangePrice />
            <hr />
            <NumOfRoom />
            <hr />
            <HomeSize />
            <hr />
            <Button onClick={() => console.log("login")} variant="primary">
              APPLY FILTERS
            </Button>
          </div>
        ) : (
          <InputSearch />
        )}

        <div className="">
          {/* top */}
          {isMedium ? (
            <InputSearch />
          ) : (
            <div className="flex flex-wrap gap-y-3 justify-between mt-5">
              <Category />
              <Type />
              <NumOfRoom />
              <HomeSize />
            </div>
          )}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
            {featuredProperties.map((property) => (
              <Link key={property.id} to={`/listings/${property.id}`}>
                <ListingCard {...property} />
              </Link>
            ))}
          </div>
          {/* ======= */}
          =======
          {/* >>>>>>> 083adc8279328a16b07f067162efb772b728c9dd */}
        </div>
      </div>
      {/* <<<<<<< HEAD */}
    </div>
  );
};
