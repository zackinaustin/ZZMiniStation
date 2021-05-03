import './stationDetail.css';

export function StationDetail(props) {
        if(!props.station){
            return (<div className={"station-detail-container"}/>);
        }
        const station = props.station;
        return (
            <div className={"station-detail-container"}>
                <div className={"station-detail-name"}>
                    <h2>{station.name}</h2>
                </div>
                <div className={"station-detail-description"}>
                    {station.description}
                </div>
                <div className={"station-detail-image"}>
                    <img src={station.imgUrl}/>
                </div>
                <div className={"station-detail-play-control"}>
                    <audio controls autoPlay src={station.streamUrl}/>
                </div>
            </div>
        )
}