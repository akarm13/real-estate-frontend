import * as yup from "yup";

const basicInfoSchema = yup.object().shape({
  category: yup.string().required("Category is required"),
  title: yup.string().required("Title is required"),
  area: yup
    .number()
    .typeError("Area must be a number")
    .positive("Area must be a positive number")
    .required("Area is required"),
  bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .integer("Bedrooms must be a whole number")
    .positive("Bedrooms must be a positive number")
    .required("Bedrooms is required"),
  bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .integer("Bathrooms must be a whole number")
    .positive("Bathrooms must be a positive number")
    .required("Bathrooms is required"),
  other: yup
    .number()
    .typeError("Other must be a number")
    .integer("Other must be a whole number")
    .positive("Other must be a positive number"),
});

const amenitiesSchema = yup.object().shape({
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

const locationSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  marker: yup.object().shape({
    latitude: yup.number().required("Latitude is required"),
    longitude: yup.number().required("Longitude is required"),
  }),
});

const photosSchema = yup.object().shape({
  files: yup
    .array()
    .of(
      yup
        .mixed()
        .test("type", "Only images are allowed", (value) =>
          value.type.startsWith("image/")
        )
    )
    .min(3, "At least three image are required"),
});
export const createListingSchemas = [
  basicInfoSchema,
  locationSchema,
  amenitiesSchema,
  photosSchema,
];
