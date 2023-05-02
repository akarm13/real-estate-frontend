import * as yup from "yup";

export const editListingSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  status: yup.string().required("Status is required"),
  price: yup
    .number()
    .required("Price is required")
    .typeError("Price is required")
    .positive("Price must be a positive number"),
  amenities: yup.lazy((value) =>
    Object.keys(value).length > 0
      ? yup
          .object()
          .test(
            "one-amenity-selected",
            "At least one amenity must be selected",
            (amenitiesObj) => {
              return Object.values(amenitiesObj).some((selected) => selected);
            }
          )
      : yup
          .object()
          .test(
            "one-amenity-selected",
            "At least one amenity must be selected",
            () => false
          )
  ),
});
