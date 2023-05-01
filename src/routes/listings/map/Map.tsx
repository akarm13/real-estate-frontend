import "mapbox-gl/dist/mapbox-gl.css";
import queryString from "query-string";
import { useEffect, useRef, useState } from "react";
import MapGl, { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useClickAway } from "react-use";
import { useDebounce } from "use-debounce";
import { useGetAllListingsQuery } from "../../../api/endpoints/listings";
import { Button } from "../../../components/Button";
import { ListingCard } from "../../../components/ListingCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/Popover";
import SkeletonListingCard from "../../../components/skeleton/SkeletonListingCard";
import {
  BuildingType,
  Listing,
  ListingType,
  SearchPayload,
} from "../../../types/listing";
import { removeUnusedQueryParams } from "../../../utils/url";
import { InputSearch } from "../../search/InputSearch";
import { MapViewport } from "../MapSection";
import { NoListingsFound } from "../NoListingsFound";
import { CompactListingCard } from "./CompactListingCard";
import { Filters } from "./Filters";
import { MarkerIcon } from "./MarkerIcon";
import { ChevronDown, X } from "lucide-react";
import { ListingCategory } from "../../../components/filters/MobileFilter";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export type FilterItem = {
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
  const queryParams = queryString.parse(
    removeUnusedQueryParams(location.search)
  );

  const [title, setTitle] = useState<string>(
    (queryParams.keyword as string) || ""
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    (queryParams.buildingType as string)?.split(",") || []
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    (queryParams.type as string)?.split(",") || []
  );

  const [selectedBedrooms, setSelectedBedrooms] = useState<string[]>(
    queryParams.minBedrooms ? [queryParams.minBedrooms.toString()] : []
  );
  const [selectedBathrooms, setSelectedBathrooms] = useState<string[]>(
    queryParams.minBathrooms ? [queryParams.minBathrooms.toString()] : []
  );
  const [selectedAreas, setSelectedAreas] = useState<string[]>(
    queryParams.minHomeSize ? [queryParams.minHomeSize.toString()] : []
  );
  const [minPrice, setMinPrice] = useState<string | undefined>(
    queryParams.minPrice ? queryParams.minPrice.toString() : undefined
  );
  const [maxPrice, setMaxPrice] = useState<string | undefined>(
    queryParams.maxPrice ? queryParams.maxPrice.toString() : undefined
  );

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((t) => t !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTypeClick = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((t) => t !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleBedroomClick = (bedroom: string) => {
    setSelectedBedrooms([bedroom]);
  };

  const handleBathroomClick = (bathroom: string) => {
    setSelectedBathrooms([bathroom]);
  };

  const handleAreaClick = (area: string) => {
    setSelectedAreas([area]);
  };

  const handleClear = (key: string) => {
    switch (key) {
      case "categories":
        setSelectedCategories([]);
        break;
      case "type":
        setSelectedTypes([]);
        break;
      case "bedrooms":
        setSelectedBedrooms([]);
        break;
      case "bathrooms":
        setSelectedBathrooms([]);
        break;
      case "area":
        setSelectedAreas([]);
        break;
      case "price":
        setMaxPrice(undefined);
        setMinPrice(undefined);
        break;
      default:
        break;
    }
  };

  const updateURL = () => {
    const queryParams = {
      keyword: title,
      buildingType: selectedCategories.join(","),
      type: selectedTypes.join(","),
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minBedrooms:
        selectedBedrooms.length > 0 ? Number(selectedBedrooms[0]) : undefined,
      maxBedrooms: undefined,
      minBathrooms:
        selectedBathrooms.length > 0 ? Number(selectedBathrooms[0]) : undefined,
      maxBathrooms: undefined,
      minHomeSize:
        selectedAreas.length > 0 ? Number(selectedAreas[0]) : undefined,
      maxHomeSize: undefined,
      pageNumber: 1,
      pageSize: 100,
      boundingBox: query.boundingBox,
    };

    const fullUrl = queryString.stringifyUrl({
      url: "/map",
      query: queryParams,
    });

    const cleanUrl = removeUnusedQueryParams(fullUrl);

    navigate(cleanUrl);
  };

  useEffect(() => {
    updateURL();
  }, [
    title,
    selectedCategories,
    selectedTypes,
    minPrice,
    maxPrice,
    selectedBedrooms,
    selectedBathrooms,
    selectedAreas,
  ]);

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col">
        <div className="grid grid-cols-1 gap-y-4 gap-x-4">
          {/* Filters section */}
          <div className="flex gap-x-4 overflow-x-auto pb-4 lg:py-0">
            {filterItems.map((filterItem, index) => (
              <Popover>
                <PopoverTrigger>
                  <Button
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-x-2"
                  >
                    <span className="font-medium text-primaryText">
                      {filterItem.label}
                    </span>
                    <ChevronDown className="stroke-gray-500" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-white w-80 border-2 border-primary-background">
                  <Filters
                    type={filterItem}
                    selectedBedrooms={selectedBedrooms}
                    selectedBathrooms={selectedBathrooms}
                    selectedAreas={selectedAreas}
                    selectedCategories={selectedCategories}
                    selectedTypes={selectedTypes}
                    onCategoryClick={handleCategoryClick}
                    onTypeClick={handleTypeClick}
                    onBedroomClick={handleBedroomClick}
                    onBathroomClick={handleBathroomClick}
                    onAreaClick={handleAreaClick}
                    maxPrice={maxPrice}
                    minPrice={minPrice}
                    onMaxPriceChange={setMaxPrice}
                    onMinPriceChange={setMinPrice}
                    onClear={(key) => handleClear(key)}
                  />
                </PopoverContent>
              </Popover>
            ))}
          </div>
          <InputSearch
            onValueChange={setTitle}
            value={title}
            placeholder="Search by title"
            className="flex"
          />
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
