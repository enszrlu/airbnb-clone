import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ searchResults }) {
    // const [viewport, setViewport] = useState({
    //     width: '100%',
    //     height: '100%',
    //     longitude: -0.0422275,
    //     latitude: 51.421655,
    //     zoom: 11
    // });
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map((item) => ({ latitude: item.lat, longitude: item.long }));
    const center = getCenter(coordinates);

    return (
        <ReactMapGL
            initialViewState={{
                longitude: center.longitude + 0.1,
                latitude: center.latitude - 0.1,
                zoom: 11
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/enszrlu/clfkbv10e000z01qu5as9nx97"
            mapboxAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewPort) => setViewport(nextViewPort.viewState)}
        >
            {searchResults.map((item) => (
                <div key={item.long}>
                    <Marker
                        longitude={item.long}
                        latitude={item.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            onClick={() => setSelectedLocation(item)}
                            className="cursor-pointer text-2xl animate-bounce"
                        >
                            📌
                        </p>
                    </Marker>
                    {selectedLocation.long === item.long ? (
                        <Popup
                            closeOnClick={false}
                            longitude={item.long}
                            latitude={item.lat}
                            onClose={() => setSelectedLocation({})}
                            // offsetLeft={-20}
                            // offsetTop={50}
                        >
                            {item.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map;
