import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";

type Props = {
  title: String;
  description: String;
};

export const BenefitCard = ({ title, description }: Props) => {
  return (
    <div className="bg-white border border-primary-background text-center  flex flex-col items-center gap-y-6 py-[40px] rounded-2xl h-80">
      <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
        <SearchIcon fill="currentColor" className="text-primary-500" />
      </div>
      <h1 className="text-primary-900 font-semibold text-xl">{title}</h1>
      <p className="w-10/12 mx-auto text-secondaryText">{description}</p>
    </div>
  );
};
