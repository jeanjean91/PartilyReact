import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN= 'pk.eyJ1IjoidHJpbGw5MSIsImEiOiJjazVlbWZiMGsxN3NwM2xucXFuOG1mOXluIn0.oOSekCAu1sx63Zv9rgdp3A';

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 400,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map