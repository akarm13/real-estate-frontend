import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const BenefitCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex h-80 flex-col items-center  gap-y-6 rounded-2xl border border-primary-background bg-white py-[40px] text-center transition hover:shadow-footer">
      <div className="flex items-center justify-center rounded-2xl bg-primary-background p-4">
        {icon}
      </div>
      <h1 className="text-xl font-semibold text-primary-900">{title}</h1>
      <p className="mx-auto w-10/12 text-secondaryText">{description}</p>
    </div>
  );
};
