import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component<{}, any> {
    state = {
        isLoading: false,
        data: []
    }
    componentDidMount() {
        this.setState({isLoading: true})
        axios.get('http://localhost:8080/api/wss/getAll')
            .then(res => {
                const data = res.data;
                this.setState({data, isLoading: false});
                console.log(this.state.data);
            })
    }

    render() {
        const {data, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading</p>
        }
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        {data.map((pack: any) =>
                            <div key={pack.id}>
                                {pack.temp}
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
