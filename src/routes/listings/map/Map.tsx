import "mapbox-gl/dist/mapbox-gl.css";
import queryString from "query-string";
import {
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MapGl, { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDebounce } from "use-debounce";
import { useGetAllListingsQuery } from "../../../api/endpoints/listings";
import { ListingCard } from "../../../components/ListingCard";
import SkeletonListingCard from "../../../components/skeleton/SkeletonListingCard";
import { Listing, ListingType, SearchPayload } from "../../../types/listing";
import { removeUnusedQueryParams } from "../../../utils/url";
import { InputSearch } from "../../search/InputSearch";
import { MapViewport } from "../MapSection";
import { NoListingsFound } from "../NoListingsFound";
import { useClickAway } from "react-use";
import { MarkerIcon } from "./MarkerIcon";
import { CompactListingCard } from "./CompactListingCard";
import { ReactComponent as ListIcon } from "../../../assets/icons/search/list.svg";
import { Button } from "../../../components/Button";
import { Popover } from "../../../components/Popover";
import { PopoverTrigger } from "../../../components/Popover";
import { PopoverContent } from "../../../components/Popover";
import { PriceInput } from "../../../components/filters/PriceInput";
import {
  ListingCategory,
  bathrooms,
  bedrooms,
  categories,
  homeSizes,
  types,
} from "../../../components/filters/MobileFilter";
import { SelectButton } from "../../../components/filters/SelectButton";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

type FilterItem = {
  label: string;
  value: string;
};

const filterItems: FilterItem[] = [
  {
    label: "Category",
    value: "category",
  },
  {
    label: "Type",
    value: "type",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Bedrooms",
    value: "bedrooms",
  },
  {
    label: "Bathrooms",
    value: "bathrooms",
  },
  {
    label: "Area",
    value: "area",
  },
];

export const Map = () => {
  const [viewport, setViewport] = useState<MapViewport>({
    latitude: 35.5784474,
    longitude: 45.3864838,
    zoom: 12,
    width: "100%",
    height: "100%",
  });
  const [title, setTitle] = useState<string>("");
  const [boundingBox, setBoundingBox] = useState<number[] | undefined>([]);
  const mapRef = useRef<MapRef>(null);

  const navigate = useNavigate();

  const updateBoundingBox = (e: ViewStateChangeEvent) => {
    const bounds = e?.target.getBounds();
    const sw = bounds?.getSouthWest();
    const ne = bounds?.getNorthEast();
    setBoundingBox([sw?.lng!, sw?.lat!, ne?.lng!, ne?.lat!]);
  };

  const [boundingBoxDebounced] = useDebounce(boundingBox, 750);

  useEffect(() => {
    const updateUrl = () => {
      const queryParams: SearchPayload = queryString.parse(
        removeUnusedQueryParams(location.search)
      );
      queryParams.boundingBox = boundingBoxDebounced?.join(",");
      const fullUrl = queryString.stringifyUrl({
        url: "/map",
        query: queryParams,
      });
      const cleanUrl = removeUnusedQueryParams(fullUrl);
      navigate(cleanUrl);
    };

    if (boundingBoxDebounced) {
      updateUrl();
    }
  }, [boundingBoxDebounced]);

  const query: SearchPayload = queryString.parse(
    removeUnusedQueryParams(location.search)
  );
  const {
    data: listing,
    isLoading,
    isError,
    isFetching,
  } = useGetAllListingsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const compactRef = useRef<HTMLDivElement | null>(null);

  useClickAway(compactRef, () => {
    setSelectedListing(null);
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col">
        <div className="grid grid-cols-3 gap-x-4">
          <InputSearch title={title} setTitle={setTitle} />

          {/* Filters section */}
          <div className="flex gap-x-4">
            {filterItems.map((filterItem, index) => (
              <Popover>
                <PopoverTrigger>
                  <Button
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-x-2"
                  >
                    <span>{filterItem.label}</span>
                    <span className="text-gray-500">All</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-white w-80 border-2 border-primary-background">
                  <Filters type={filterItem} />
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 mt-8">
          <div className="flex flex-col gap-y-8">
            <div className="grid h-[80vh] grid-cols-1 gap-x-4 gap-y-8 overflow-y-auto md:grid-cols-2">
              {isLoading || isFetching ? (
                <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonListingCard key={index} />
                  ))}
                </>
              ) : listing?.data !== undefined && listing.data?.length > 0 ? (
                listing?.data.map((listing: Listing) => (
                  <Link key={listing?._id} to={`/listings/${listing?._id}`}>
                    <ListingCard {...listing} />
                  </Link>
                ))
              ) : (
                <NoListingsFound />
              )}
            </div>
          </div>
          <div className="sticky top-0 flex flex-col gap-y-8">
            <div className="h-[80vh]">
              <div className="relative">
                <div className="absolute top-6 left-6 z-10 flex">
                  <ClipLoader
                    color="#5B4DFF"
                    loading={isLoading || isFetching}
                    size={48}
                    cssOverride={{
                      borderWidth: 5,
                    }}
                  />
                </div>
              </div>
              <MapGl
                ref={mapRef}
                mapboxAccessToken={accessToken}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onMove={({ viewState }) => {
                  setViewport({
                    ...viewState,
                  });
                }}
                onMoveEnd={updateBoundingBox}
                style={{
                  borderRadius: "0.5rem",
                }}
                {...viewport}
              >
                {listing?.data.map((listing) => (
                  <Marker
                    key={listing._id}
                    latitude={listing.geometry.coordinates[0]}
                    longitude={listing.geometry.coordinates[1]}
                    onClick={() => {
                      setSelectedListing(listing);
                    }}
                    style={{
                      cursor: "pointer",
                      zIndex: selectedListing?._id === listing._id ? 10 : 1,
                    }}
                  >
                    {selectedListing?._id === listing._id && (
                      <div ref={compactRef} className="">
                        <CompactListingCard listing={{ ...selectedListing }} />
                      </div>
                    )}
                    <MarkerIcon />
                  </Marker>
                ))}
              </MapGl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type FiltersProps = {
  type: FilterItem;
  onTypeChange?: (types: ListingType[]) => void;
  onCategoryChange?: (categories: ListingCategory[]) => void;
  onBedroomsChange?: (bedrooms: number[]) => void;
  onBathroomsChange?: (bathrooms: number[]) => void;
  onHomeSizesChange?: (homeSizes: number[]) => void;
  onMinPriceChange?: (minPrice: number) => void;
  onMaxPriceChange?: (maxPrice: number) => void;
  onKeywordChange?: (keyword: string[]) => void;
};
const Filters = ({ type }: FiltersProps) => {
  const [selectedTypes, setSelectedTypes] = useState<ListingType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<
    ListingCategory[]
  >([]);

  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number[]>([]);
  const [selectedHomeSizes, setSelectedHomeSizes] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [inputValue, setInputValue] = useState<string>("");
  const [Keyword, setkeyword] = useState<string[]>([]);

  const handleCategoryClick = (category: ListingCategory) => {
    // Push or remove from array
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((t) => t !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTypeClick = (type: ListingType) => {
    // Push or remove from array
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((t) => t !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleBedroomClick = (bedroom: number) => {
    // Make it so that it selects only one bedroom
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms([]);
    } else {
      setSelectedBedrooms([bedroom]);
    }
  };

  const handleBathroomClick = (bedroom: number) => {
    // Make it so that it selects only one bedroom
    if (selectedBathrooms.includes(bedroom)) {
      setSelectedBathrooms([]);
    } else {
      setSelectedBathrooms([bedroom]);
    }
  };

  const handleHomeSizeClick = (homeSize: number) => {
    if (selectedHomeSizes.includes(homeSize)) {
      setSelectedHomeSizes([]);
    } else {
      setSelectedHomeSizes([homeSize]);
    }
  };

  switch (type.value) {
    case "type":
      return (
        <div className="p-4">
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-primaryText ">Type</h1>
            <span className="mt-1 font-normal text-gray-500">
              (multiple selection)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 items-center gap-x-2 gap-y-3">
            {types.map((type) => (
              <SelectButton
                isSelected={selectedTypes.includes(type.value)}
                onClick={() => handleTypeClick(type.value)}
                key={type.value}
              >
                {type.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "category":
      return (
        <div className="p-4">
          <div className="flex flex-col">
            <h1 className="flex flex-col text-base font-semibold text-primaryText">
              Category
            </h1>
            <span className="mt-1 font-normal text-gray-500">
              (multiple selection)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 flex-wrap items-center gap-x-2 gap-y-3">
            {categories.map((category) => (
              <SelectButton
                isSelected={selectedCategories.includes(category.value)}
                onClick={() => handleCategoryClick(category.value)}
                key={category.value}
              >
                {category.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "price":
      return (
        <div className="p-4">
          <div className="flex items-center">
            <label
              className="text-base font-semibold text-primaryText"
              htmlFor="minimumPrice"
            >
              Price
            </label>
          </div>
          <PriceInput
            containerClassName="mt-4"
            firstInputPlaceholder="Min Price"
            secondInputPlaceholder="Max Price"
            onFirstInputChange={(value) => setMinPrice(+value)}
            onSecondInputChange={(value) => setMaxPrice(+value)}
          />
        </div>
      );
    case "bedrooms":
      return (
        <div className="p-4">
          <div className="flex items-center">
            <h1
              className="text-base font-semibold text-primaryText
"
            >
              Bedrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bedrooms.map((bedroom, i) => (
              <SelectButton
                isSelected={selectedBedrooms.includes(bedroom.value)}
                onClick={() => handleBedroomClick(bedroom.value)}
                key={bedroom.value}
                className={getJoinedButtonClassName(i, bedrooms.length)}
              >
                {bedroom.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "bathrooms":
      return (
        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              Bathrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bathrooms.map((bathroom, i) => (
              <SelectButton
                isSelected={selectedBathrooms.includes(bathroom.value)}
                onClick={() => handleBathroomClick(bathroom.value)}
                key={bathroom.value}
                className={getJoinedButtonClassName(i, bathrooms.length)}
              >
                {bathroom.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "area":
      return (
        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              <span>Home Size</span>
              <span className="text-secondary ml-1 text-base font-normal">
                (m<sup>2</sup>)
              </span>
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-4 flex-wrap items-center gap-y-3">
            {homeSizes.map((homeSize, i) => (
              <SelectButton
                isSelected={selectedHomeSizes.includes(homeSize.value)}
                onClick={() => handleHomeSizeClick(homeSize.value)}
                key={homeSize.value}
                className={getJoinedButtonClassName(i, homeSizes.length)}
              >
                {homeSize.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};
const getJoinedButtonClassName = (index: number, length: number) => {
  if (index === 0) {
    return "rounded-l-lg rounded-r-none";
  }
  if (index === length - 2) {
    return "rounded-r-none rounded-l-none";
  }
  if (index === length - 1) {
    return "rounded-r-lg border-l-0 rounded-l-none";
  }
  return "rounded-none border-l-0 focus:border-l";
};
