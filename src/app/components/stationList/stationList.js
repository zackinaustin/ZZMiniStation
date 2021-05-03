import './stationList.css';
import './tagInput.css';
import React, {Component} from "react";
import ReactTags from 'react-tag-autocomplete'



export class StationList extends Component {
    constructor() {
        super();

        this.state = {
            selectedTags: []
        }
        this.getAvailableTags = this.getAvailableTags.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.reactTags = React.createRef()
    }

    handleAddition(tag) {
        let { selectedTags } = this.state;
        this.setState({ selectedTags: [...selectedTags, tag] });
    }

    handleDelete (i) {
        const selectedTags = this.state.selectedTags.slice(0)
        selectedTags.splice(i, 1)
        this.setState({ selectedTags })
    }

    getAvailableTags() {
        let tempStationTags = [];
        this.props.stationList.forEach((station)=>{
            tempStationTags = tempStationTags.concat(station.tags);
        });
        let stationTags = tempStationTags.filter((item, pos) => tempStationTags.indexOf(item) === pos);
        let finalStationTags = stationTags.map((item, index) => {return {"id": index , "name": item}});
        console.log(finalStationTags);
        return finalStationTags;
    }

    render() {
        let { selectedTags } = this.state;
        let tagList = selectedTags.map((tag) => tag.name);

        let stations = this.props.stationList;

        const availableTag = this.getAvailableTags();

        const stationItemElement = stations.filter((station)=>{
            // filter the station by selected tag
            if(tagList.length === 0){
                return true;
            }
            let pass = false;
            tagList.forEach((tag) => {
                if (station.tags.indexOf(tag)>=0){
                    pass = true
                }
            })
            return pass;
        }).sort((a, b) => {
            // sort the station by reliability then by popularity
            return b["reliability"] - a["reliability"] || b["popularity"] - a["popularity"];
        }).map((station) =>
            <li className="station-list-item"
                value={station.id}
                onClick={this.props.handleClick}>
                {station.name}
            </li>
        )
        return (
            <div className="station-list-container">
                <div className="station-list-tag-input">
                    <ReactTags
                        ref={this.reactTags}
                        tags={selectedTags}
                        placeholderText={"Type to see suggestion"}
                        onAddition={this.handleAddition}
                        onDelete={this.handleDelete}
                        suggestions={availableTag}/>
                </div>
                <ul className="station-list">
                    {stationItemElement}
                </ul>
            </div>

        )
    }

}