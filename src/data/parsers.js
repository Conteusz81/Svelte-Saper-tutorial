import format from './format'
import moment from "moment";

function usStats(data) {
    const [usStatsRaw] = data;
    return parseStats(usStatsRaw);
}

function stateStats(stateRawData) {
    return parseStats(stateRawData);
}

function parseStats(rawStats) {
    return {
        cases: format.number(rawStats.positive),
        deaths: format.number(rawStats.death),
        recovered: format.number(rawStats.recovered),
        ventilator: format.number(rawStats.onVentilatorCurrently),
        hospitalized: format.number(rawStats.hospitalized),
        icu: format.number(rawStats.inIcuCurrently),
        tested: format.number(rawStats.totalTestResults),
        updated: moment(rawStats.lastModified).format('LLLL')
    }
}
export default { usStats, stateStats }
