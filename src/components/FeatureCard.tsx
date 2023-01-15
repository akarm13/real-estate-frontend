import { FiSearch } from "react-icons/fi";
type Props = {
  title: String;
  desc: String;
};

export const VisionCard = ({ title, desc }: Props) => {
  return (
    <div className="bg-white border border-primary-background w-[300px] text-center  flex flex-col items-center gap-y-6 py-[40px] rounded-md ">
      <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.9147 28.5936L25.7211 22.3975C30.3554 16.2045 29.0918 7.42713 22.8988 2.79284C16.7058 -1.84146 7.92843 -0.577835 3.29414 5.6152C-1.34016 11.8082 -0.0765382 20.5856 6.11649 25.2199C11.0912 28.9425 17.924 28.9425 22.8988 25.2199L29.0949 31.416C29.8736 32.1947 31.136 32.1947 31.9146 31.416C32.6933 30.6373 32.6933 29.3749 31.9146 28.5963L31.9147 28.5936ZM14.5593 24.0239C9.0552 24.0239 4.59332 19.5621 4.59332 14.058C4.59332 8.55391 9.0552 4.09202 14.5593 4.09202C20.0633 4.09202 24.5252 8.55391 24.5252 14.058C24.5194 19.5596 20.0609 24.0181 14.5593 24.0239Z" fill="#5B4DFF" />
        </svg>

      </div>
      <h1 className="text-primary-500 font-semibold">{title}</h1>
      <p className="w-10/12 mx-auto text-secondaryText text-sm">{desc}</p>
    </div>
  );
};
