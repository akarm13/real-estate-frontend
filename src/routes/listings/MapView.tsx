import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import Map, { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import { ListingCard } from "../../components/ListingCard";
import { InputSearch } from "../search/InputSearch";
import { MapViewport } from "./MapSection";
import { SearchPayload } from "../../types/listing";
import queryString from "query-string";
import { removeUnusedQueryParams } from "../../utils/url";
import { useDebounce } from "use-debounce";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";
import { ClipLoader } from "react-spinners";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const MapView = () => {
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

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col md:px-0">
        <div className="grid grid-cols-2 gap-x-8">
          <div className="flex flex-col gap-y-8">
            <InputSearch title={title} setTitle={setTitle} />

            <div className="grid h-[80vh] grid-cols-1 gap-x-4 gap-y-8 overflow-y-auto md:grid-cols-2">
              {isLoading || isFetching ? (
                <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonListingCard key={index} />
                  ))}
                </>
              ) : listing?.data !== undefined && listing.data?.length > 0 ? (
                listing?.data.map((property: any) => (
                  <Link key={property?._id} to={`/listings/${property?._id}`}>
                    <ListingCard {...property} />
                  </Link>
                ))
              ) : (
                <h1>No listings found</h1>
              )}
            </div>
          </div>
          <div className="sticky top-0">
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
            <Map
              ref={mapRef}
              mapboxAccessToken={accessToken}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onMove={({ viewState }) => {
                setViewport({
                  ...viewState,
                });
              }}
              onMoveEnd={updateBoundingBox}
              {...viewport}
            >
              {listing?.data.map((listing) => (
                <Marker
                  key={listing._id}
                  latitude={listing.geometry.coordinates[0]}
                  longitude={listing.geometry.coordinates[1]}
                >
                  <MarkerIcon />
                </Marker>
              ))}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarkerIcon = () => {
  return (
    <div className="h-5 w-5 rounded-full border-[3px] border-white bg-primary-500 shadow-pin"></div>
  );
};
