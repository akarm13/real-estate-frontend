import { ReactComponent as NotFoundIllustration } from "../../assets/illustrations/not-found-illustration.svg";

export const NoAgentsFound = () => (
  <div className="mt-16 flex flex-col items-center justify-center">
    <NotFoundIllustration className="mb-6 h-40 w-40 md:h-60 md:w-60" />
    <h2 className="text-2xl font-semibold text-gray-700">No agents found</h2>
    <p className="mt-4 text-center text-gray-500">
      We couldn't find any agents matching your search criteria. Please try
      adjusting your filters or search term.
    </p>
  </div>
);
