import React from 'react';
import './App.css';
import AboutUS from "../AbousUs/AboutUs";

class App extends React.Component<{}, any> {
    render() {
        return (
            <div className="App">
                <AboutUS/>

            </div>
        );
    }
}

export default App;
