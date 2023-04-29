import * as yup from "yup";

const basicInfoSchema = yup.object().shape({
  category: yup.string().required("Category is required"),
  type: yup.string().required("Type is required"),

  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  area: yup
    .number()
    .required("Area is required")
    .typeError("Area is required")
    .positive("Area must be a positive number"),

  bedrooms: yup
    .number()
    .required("Bedrooms is required")
    .typeError("Bedrooms is required")
    .integer("Bedrooms must be a whole number")
    .positive("Bedrooms must be a positive number"),
  bathrooms: yup
    .number()
    .required("Bathrooms is required")
    .typeError("Bathrooms is required")
    .integer("Bathrooms must be a whole number")
    .positive("Bathrooms must be a positive number"),

  other: yup
    .number()
    .typeError("Other is required")
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
        .test(
          "is-file-or-null",
          "Each element must be a File or null",
          (value) => value instanceof File || value === null
        )
    )
    .test(
      "at-least-three-images",
      "At least three images are required",
      (arr) =>
        arr ? arr.filter((item) => item instanceof File).length >= 3 : false
    ),
});

export const createListingSchemas = [
  basicInfoSchema,
  locationSchema,
  amenitiesSchema,
  photosSchema,
];
