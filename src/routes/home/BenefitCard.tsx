
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";

type Props = {
  title: String;
  description: String;
};

export const BenefitCard = ({ title, description }: Props) => {
  return (
    <div className="bg-white border border-primary-background w-[300px] text-center  flex flex-col items-center gap-y-6 py-[40px] rounded-2xl ">
      <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
        <SearchIcon />
      </div>
      <h1 className="text-primary-500 font-semibold text-xl">{title}</h1>
      <p className="w-10/12 mx-auto text-secondaryText">{description}</p>
    </div>
  );
};
