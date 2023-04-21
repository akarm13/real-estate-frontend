import { Listing } from "../../types/listing";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "../../components/skeleton/Skeleton";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

console.log(accessToken);

type Props = {
  geometry: Listing["geometry"] | undefined;
  isLoading: boolean;
};
``;

export const MapSection = ({ geometry, isLoading }: Props) => {
  const defaultCenter = { lat: 51.505, lng: -0.09 };
  const center = geometry
    ? { lat: geometry.coordinates[0], lng: geometry.coordinates[1] }
    : defaultCenter;

  return (
    <div className="z-10 mt-14 flex flex-col gap-6">
      <h2 className="text-lg font-semibold lg:text-2xl">Location</h2>
      <div className="h-[353px] w-full max-w-[720px] overflow-hidden rounded-2xl md:h-[553px] lg:h-[653px]">
        {isLoading ? (
          <Skeleton className="h-full w-full" />
        ) : (
          <MapContainer
            center={center}
            zoom={13}
            style={{ width: "100%", height: "100%", zIndex: 10 }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
            />
            <Marker position={center}>
              <Popup>
                {geometry
                  ? `Latitude: ${geometry.coordinates[1]}, Longitude: ${geometry.coordinates[0]}`
                  : "Default Location"}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};
