import './App.css';
import {Component} from "react";
import {JsonRetrievalClient} from "./asset/jsonRetrievalClient";
import {StationList} from "./components/stationList/stationList";

import {StationDetail} from "./components/stationDetail/stationDetail";

class App extends Component {
    constructor() {
        super();

        this.state = {
            stationList: [],
            selectedStation: undefined,
        }
        this.jsonRetrievalClient = new JsonRetrievalClient();

        this.handleListItemLick = this.handleListItemLick.bind(this);
        this.getStationByID = this.getStationByID.bind(this);
    }

    componentDidMount() {
        this.jsonRetrievalClient.fetchJSON().then((response) => {
            this.setState({
                stationList: response.data
            })
        });
    }

    handleListItemLick(e) {
        const stationID = e.target.getAttribute("value");
        this.setState({
            selectedStation: stationID
        });
    }

    getStationByID(stationID) {
        return this.state.stationList.find((station) => station.id === stationID);
    }


    render() {
        let station;
        if (this.state.selectedStation) {
            station = this.getStationByID(this.state.selectedStation);
        }
        return (
            <div className="App">
                <header className="App-header">
                    ZZ's Mini Radio
                </header>
                <div className="App-body">
                    <StationList stationList={this.state.stationList}
                                 handleClick={this.handleListItemLick}/>
                    <StationDetail station={station}/>
                </div>
                <div className="App-footer">
                    Whatever should be here
                </div>
            </div>)
    };
}

export default App;
