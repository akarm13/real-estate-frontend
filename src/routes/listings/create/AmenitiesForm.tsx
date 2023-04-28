import { Checkbox } from "../../../components/Checkbox";

const amenities = [
  {
    _id: "63fa197bde46d05a3ccaefc9",
    title: "Parking",
    __v: 0,
  },
  {
    _id: "63fa198cde46d05a3ccaefcb",
    title: "Heating and cooling systems",
    __v: 0,
  },
  {
    _id: "63fa1994de46d05a3ccaefcd",
    title: "Internet and cable TV connectivity",
    __v: 0,
  },
  {
    _id: "63fa199ade46d05a3ccaefcf",
    title: "Swimming pool",
    __v: 0,
  },
  {
    _id: "63fa199fde46d05a3ccaefd1",
    title: "Fireplace",
    __v: 0,
  },
  {
    _id: "63fa19a5de46d05a3ccaefd3",
    title: "Solar panels",
    __v: 0,
  },
  {
    _id: "643716c506be8fabe146b6ba",
    title: "balcony",
    __v: 0,
  },
];

export const AmenitiesForm = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">Amenities</h3>
        <h4 className="text-lg text-gray-600">
          List the amenities that the property offers, such as parking, pool,
          gym, security, internet, etc.
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-x-8 gap-y-4 items-center">
        {amenities.map((amenity) => (
          <div className="flex gap-x-2 items-center ">
            <input
              id={amenity._id}
              type="checkbox"
              value="rent"
              className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
            />
            <label
              htmlFor={amenity._id}
              className="font-medium text-primaryText capitalize"
            >
              {amenity.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
