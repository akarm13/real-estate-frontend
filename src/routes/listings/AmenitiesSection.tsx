export const AmenitiesSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>

      <div className="flex lg:flex-row flex-col   gap-4 w-[730px] flex-wrap">
        <h3 className="text-primary-500  bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg">
          Parking
        </h3>

        <h3 className="text-primary-500 bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg">
          Heating and cooling systems
        </h3>

        <h3 className="text-primary-500 bg-primary-background w-72 md:w-1/2 lg:w-fit px-3 py-2 rounded-lg">
          Internet and cable TV connectivity
        </h3>

        <h3 className="text-primary-500 bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg">
          Swimming pool
        </h3>

        <h3 className="text-primary-500 bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg">
          Fireplace
        </h3>

        <h3 className="text-primary-500 bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg">
          Solar panels
        </h3>
      </div>
    </div>
  );
};
