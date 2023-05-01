import { Link } from "react-router-dom";
import { ReactComponent as EmailIcon } from "../../assets/agents/at-sign.svg";
import { ReactComponent as PhoneIcon } from "../../assets/agents/phone.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/listing/featured-star.svg";
import { ReactComponent as ViewIcon } from "../../assets/icons/right-caret.svg";

type Props = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  isVerified: boolean;
};

export const AgentCard = ({
  id,
  fullName,
  email,
  phone,
  avatar,
  isVerified,
}: Props) => {
  return (
    <div className="relative flex flex-col rounded-2xl border border-primary-background">
      {isVerified ? (
        <div className="absolute right-0 top-0 flex items-center gap-x-2 rounded-lg bg-primary-500 py-2 px-4">
          <StarIcon width={16} height={16} />

          <span className="text-sm font-semibold uppercase text-white">
            {isVerified ? "Verified" : "Unverified"}
          </span>
        </div>
      ) : null}
      {/* The user image */}
      <img
        alt={`An image of ${fullName}`}
        src={avatar}
        className="h-36 rounded-lg rounded-b-none object-cover md:h-44"
      />
      {/* Details section */}
      <div className="flex flex-col gap-y-4 py-6 px-4">
        <h3 className="text-xl font-semibold text-primaryText">{fullName}</h3>
        <div className="mt-4 flex flex-col gap-y-2">
          <div className="flex items-center">
            <EmailIcon className="h-5 w-5 fill-gray-50" />
            <span className="ml-2 font-medium text-gray-700">{email}</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5" />
            <span className="ml-2 font-medium text-gray-700">{phone}</span>
          </div>
        </div>

        {/* View agent */}
        <Link
          to={`/agents/${id}`}
          className="tranisition mt-8 flex items-center gap-x-2 hover:underline"
        >
          <ViewIcon className="h-5 w-5" />
          <span className="font-semibold text-primary-500">View agent</span>
        </Link>
      </div>
    </div>
  );
};
