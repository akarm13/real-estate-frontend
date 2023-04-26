import { useEffect, useRef, useState } from "react";
import Map, { MapRef, Marker } from "react-map-gl";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { Listing } from "../../types/listing";
import { MarkerIcon } from "./map/MarkerIcon";
const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

type Props = {
  geometry: Listing["geometry"] | undefined;
  isLoading: boolean;
};

export type MapViewport = {
  width?: string;
  height?: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export const MapSection = ({ geometry, isLoading }: Props) => {
  const [viewport, setViewport] = useState<MapViewport>({
    width: "100%",
    height: "100%",
    latitude: 35.5784474,
    longitude: 45.3864838,
    zoom: 12,
  });

  const mapRef = useRef<MapRef>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Center the map on the marker
    if (mapRef.current && geometry?.coordinates && isMounted) {
      console.log("centering map");
      mapRef.current.getMap().flyTo({
        center: [geometry.coordinates[1], geometry.coordinates[0]],
        zoom: 14,
      });
    }
  }, [geometry?.coordinates?.length, mapRef?.current, isMounted]);
  return (
    <div className="z-10 mt-14 flex flex-col gap-6">
      <h2 className="text-lg font-semibold lg:text-2xl">Location</h2>
      <div className="h-[353px] w-full max-w-[720px] overflow-hidden rounded-2xl md:h-[553px] lg:h-[653px]">
        {isLoading ? (
          <Skeleton className="h-full w-full" />
        ) : (
          <Map
            ref={mapRef}
            mapboxAccessToken={accessToken}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onRender={() => {
              setIsMounted(true);
            }}
            onMove={({ viewState }) => {
              setViewport({
                ...viewState,
              });
            }}
            {...viewport}
          >
            <Marker
              longitude={geometry?.coordinates[1]}
              latitude={geometry?.coordinates[0]}
              anchor="bottom"
            >
              <MarkerIcon />
            </Marker>
          </Map>
        )}
      </div>
    </div>
  );
};
