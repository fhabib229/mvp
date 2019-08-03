import React from 'react';
import ReactMapGl, { Popup, Marker } from 'react-map-gl';
import axios from 'axios';
import Geocoder from 'react-mapbox-gl-geocoder';
import TOKEN from '../config/mapboxToken';
import TrailMarker from './TrailMarker.jsx';
import TrailInfo from './TrailInfo.jsx';

// TODO:
//  Add navigation component
//    -trails by region
//    -trails by difficulty (gain & length)
//    -trails by pass requirements
//    -trails by rating
//  Style application

const searchPlaceholder = (props) => <input {...props} placeholder="Search" />

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      token: TOKEN,
      trails: null,
      showMarkers: false,
      popupInfo: null,
      queryParams: {
        country: 'us'
      },
      viewport: {
        latitude: 47.67894,
        longitude: -122.317768,
        zoom: 7
      }
    };

      this.sortTrails = this.sortTrails.bind(this);
      this.calculateNearestTrails = this.calculateNearestTrails.bind(this);
      this.handleViewportChange = this.handleViewportChange.bind(this);
      this.renderPopups = this.renderPopups.bind(this);
  }

  componentDidMount() {
    axios.get('/api/trails')
      .then((result) => {
        this.setState({
          isLoaded: true,
          trails: result.data
        });
    }, (error) => {
      console.log('Error retrieving trail data: ', error);
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  sortTrails() {
    // Mutates the trail data, calling the calculation function to return the distance from the input address
    let sortedTrailsByDistance = this.state.trails.map((trail) => {
      return {
        trail_name: trail.trail_name,
        coordinates: trail.coordinates,
        distance_from_addr: this.calculateNearestTrails(this.state.viewport.longitude, this.state.viewport.latitude, trail.coordinates),
        length_roundtrip: trail.length_roundtrip,
        gain: trail.gain,
        rating: trail.rating,
        parking_pass: trail.parking_pass,
        region: trail.region,
        link: trail.link
      }
    }).sort((a, b) => a.distance_from_addr - b.distance_from_addr);

    this.setState({
      trails: sortedTrailsByDistance,
      showMarkers: true,
    });
  }

  calculateNearestTrails(inputLongitude, inputLatitude, trailCoord) {
    // distance formula
    let distance = Math.sqrt(((trailCoord[0] - inputLongitude)**2) + ((trailCoord[1] - inputLatitude)**2));
    return distance;
  }

  handleViewportChange(viewport, item) {
    this.setState({viewport});
    this.sortTrails();
    console.log('Selected: ', item);
    console.log('Viewport: ', viewport);
  }

  renderPopups() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipsize={5} anchor='top'
          longitude={popupInfo.coordinates[0]}
          latitude={popupInfo.coordinates[1]}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
          >
            <TrailInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { token, isLoaded, error, trails, showMarkers, popupInfo, queryParams, viewport } = this.state;

    if (error) {
      return <div>Error...{error.message}</div>
    } else if (isLoaded === false) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={{ height: "100vh" }}>
        <ReactMapGl
          {...viewport}
          width={750}
          height="100%"
          mapStyle="mapbox://styles/fhabib229/cjthy79rr0ccb1fm8ok7tvzkc"
          mapboxApiAccessToken={token}
          onViewportChange={(newViewport) => this.setState({viewport: newViewport})}
        >
        <Geocoder
          viewport={viewport}
          mapboxApiAccessToken={token}
          onSelected={this.handleViewportChange}
          hideOnSelect={true}
          queryParams={queryParams}
          pointZoom={10}
          inputComponent={searchPlaceholder}
        />
        {showMarkers && (
          trails.map((trail, i) => {
            if (i <= 4) {
              return (
              <Marker key={`marker-${i}`} longitude={trail.coordinates[0]} latitude={trail.coordinates[1]}>
                <TrailMarker size={20} onClick={() => this.setState({ popupInfo: trail})} />
              </Marker>
              );
            }
          })
        )}
        {this.renderPopups()}
        </ReactMapGl>
        </div>
      );
    }
  }
}

export default App;
