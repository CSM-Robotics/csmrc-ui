import React, {Component} from 'react';
import MapContainer from "./components/MapContainer/MapContainer";

class AboutUs extends Component<{}, any> {

    render() {

        return (
            <div style={{height: '100%', width: '100%'}}>
                <p>
                    CSM Robotics club is a club
                </p>
                <MapContainer/>
            </div>
        );
    }
}

export default AboutUs;
