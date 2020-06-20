import React, {Component} from "react";

class MapContainer extends Component {
    static defaultProps = {
        width:480,
        height:720,
        zoom:15
    }
    constructor(props, {width, height, zoom}) {
        super(props);
        this.state = {
            key:"AIzaSyAoOkFK3Cs4HdeQTLXhb6fwBgSVpUMCqWc",
            location:"Library+and+KCSM+Building+9,+1700+W+Hillsdale+Blvd,+San+Mateo,+CA+94402",
        }
    }

    render() {
        const {key, location} = this.state;
        const {width, height, zoom} = this.props;
        return (
            <div>
                <iframe
                    className="about-map"
                    title="about-map"
                    width={width}
                    height={height}
                    frameBorder={0}
                    src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}&zoom=${zoom}`} allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default MapContainer;
