import React, {Component} from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL from 'react-map-gl'

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

  const mapAccess = {
    mapboxApiAccessToken: "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA"
}
  const mapStyle = {
    width: '100%',
    height: 600
}

const queryParams = {
    country: 'us'
}

class Example extends Component {
    state = {
        viewport: {}
    }

    onSelected = (viewport, item) => {
        this.setState({viewport});
        console.log('Selected: ', item)
    }

    render() {
        const {viewport} = this.state

        return (
            <div>
                <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
                    queryParams={queryParams}
                />

                <ReactMapGL
                    {...mapAccess} {...viewport} {...mapStyle}
                    onViewportChange={(newViewport) => this.setState({viewport: newViewport})}
                />
            </div>
        )
    }
}

export default Example;
