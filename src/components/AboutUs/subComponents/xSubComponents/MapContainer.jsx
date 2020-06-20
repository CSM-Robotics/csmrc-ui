import React, {Component} from "react";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100%',
            height: 300,
            key: "AIzaSyAoOkFK3Cs4HdeQTLXhb6fwBgSVpUMCqWc",
            location: "Library+and+KCSM+Building+9,+1700+W+Hillsdale+Blvd,+San+Mateo,+CA+94402",
            zoom: 15,
        }
    }

    render() {
        const {width, height, key, location, zoom} = this.state;
        return (
            <div>
                <iframe
                    className="about-map"
                    title="about-map"
                    width={width}
                    height={height}
                    frameBorder={0}
                    src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}&zoom=${zoom}`}
                    allowFullScreen>

                </iframe>
            </div>
        );
    }
}

export default MapContainer;
