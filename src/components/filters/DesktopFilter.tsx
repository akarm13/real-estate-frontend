import { Category } from "../../routes/search/Category";
import { NumOfRoom } from "../../routes/search/NumOfRoom";
import { HomeSize } from "../../routes/search/HomeSize";
import { Button } from "../Button";
import { PriceInput } from "./PriceInput";
import { Type } from "../../routes/search/TypeOfHouse";

export const DesktopFilter = () => {
  return (
    <div className="py-6 px-5 border-primary-background border-2 flex flex-col gap-y-6 rounded-lg">
      <Category />
      <Type />
      <hr />
      <PriceInput

        containerClassName="mt-4"
        firstInputPlaceholder="Min Price"
        secondInputPlaceholder="Max Price"
        onFirstInputChange={(value) => console.log(value)}
        onSecondInputChange={(value) => console.log(value)} />
      <hr />
      <NumOfRoom />
      <hr />
      <HomeSize />
      <hr />
      <Button onClick={() => console.log("login")} variant="primary">
        APPLY FILTERS
      </Button>
    </div>
  )
};
