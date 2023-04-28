import { useEffect, useRef, useState } from "react";
import MapGL, {
  MapRef,
  Marker,
  MarkerDragEvent,
  MarkerProps,
} from "react-map-gl";
import { Input } from "../../../components/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/Select";
import { cities } from "../../../components/filters/MobileFilter";
import { MapViewport } from "../MapSection";
const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

import mapboxgl from "mapbox-gl";
import { ReactComponent as MarkerIcon } from "../../../assets/icons/marker-icon.svg";

type Props = {
  onSubmit: (data: any) => void;
};

export const LocationForm = ({ onSubmit }: Props) => {
  const [viewport, setViewport] = useState<MapViewport>({
    width: "100%",
    height: "100%",
    latitude: 35.5784474,
    longitude: 45.3864838,
    zoom: 12,
  });

  const [marker, setMarker] = useState<MarkerProps>({
    latitude: 35.5784474,
    longitude: 45.3864838,
    draggable: true,
  });

  const onMarkerDragEnd = (event: MarkerDragEvent) => {
    const lngLat = event.lngLat;
    setMarker({
      ...marker,
      longitude: lngLat.lng,
      latitude: lngLat.lat,
    });
  };

  const mapRef = useRef<MapRef>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Center the map on the marker
    if (mapRef.current && isMounted) {
      const control = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        showAccuracyCircle: false,
      });

      if (!mapRef.current?.hasControl(control)) {
        mapRef.current?.addControl(control);
      }
    }
  }, [mapRef.current]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">
          Location Details
        </h3>
        <h4 className="text-lg text-gray-600">
          Specify the address, city, and coordinates of the property to help
          potential buyers or renters find it easily.
        </h4>
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="city" className="font-semibold text-primaryText">
            City
          </label>
          <Select>
            <SelectTrigger id="city">
              <SelectValue placeholder="Eg. Slemani" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((category) => (
                <SelectItem
                  key={category.value}
                  value={category.value as string}
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="address" className="font-semibold text-primaryText">
            Address
          </label>
          <Input placeholder="Eg. Aqary Street, Behind City Star" id="title" />
        </div>

        <div className="mt-8 h-[350px] flex flex-col gap-y-4">
          <label htmlFor="map" className="font-semibold text-primaryText">
            Map{" "}
            <span className="font-normal text-gray-600 ml-1">
              (Drag the pin around and pick)
            </span>
          </label>
          <MapGL
            mapStyle="mapbox://styles/mapbox/streets-v11"
            ref={mapRef}
            {...viewport}
            onMove={({ viewState }) => {
              setViewport({
                ...viewState,
              });
            }}
            onRender={() => {
              setIsMounted(true);
            }}
            mapboxAccessToken={accessToken}
            reuseMaps
          >
            <Marker
              longitude={marker.longitude}
              latitude={marker.latitude}
              draggable
              onDragEnd={onMarkerDragEnd}
              style={{
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <MarkerIcon
                width={32}
                height={32}
                fill="currentColor"
                className="text-primary-500"
              />
            </Marker>
          </MapGL>
        </div>
      </div>
    </div>
  );
};
