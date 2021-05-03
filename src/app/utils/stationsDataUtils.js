export function getStationByID(stationList, stationId) {
    return stationList.find((station) => station.id === stationId)
}