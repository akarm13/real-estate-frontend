const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";

export const MapView = () => {
  let { data, isLoading, isError, isFetching } = useGetAllListingsQuery(
    {
      // longitude
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col md:px-0">
        <div className="grid grid-cols-2">
          <div>somethingf</div>
          <Map
            initialViewState={{
              latitude: 35.5784474,
              longitude: 45.3864838,
              zoom: 12,
            }}
            mapboxAccessToken={accessToken}
            style={{ height: 960 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {data?.data.map((listing) => (
              <Marker
                longitude={listing.geometry.coordinates[1]}
                latitude={listing.geometry.coordinates[0]}
                anchor="bottom"
              ></Marker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
};
