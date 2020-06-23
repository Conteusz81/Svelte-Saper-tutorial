import format from'./format'
import moment from "moment";

function usStats(data) {
    const [usStatsRaw] = data;

    return {
        cases: format.number(usStatsRaw.positive),
        deaths: format.number(usStatsRaw.death),
        recovered: format.number(usStatsRaw.recovered),
        ventilator: format.number(usStatsRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatsRaw.hospitalized),
        icu: format.number(usStatsRaw.inIcuCurrently),
        tested: format.number(usStatsRaw.totalTestResults),
        updated: moment(usStatsRaw.lastModified).format('LLLL')
    }
    /*
        "date": 20200622,
            "states": 56,
            "positive": 2297383,
            "negative": 25256198,
            "pending": 2028,
            "hospitalizedCurrently": 28490,
            "hospitalizedCumulative": 233099,
            "inIcuCurrently": 5311,
            "inIcuCumulative": 10002,
            "onVentilatorCurrently": 2299,
            "onVentilatorCumulative": 909,
            "recovered": 640198,
            "dateChecked": "2020-06-22T00:00:00Z",
            "death": 114034,
            "hospitalized": 233099,
            "lastModified": "2020-06-22T00:00:00Z",
            "total": 27555609,
            "totalTestResults": 27553581,
            "posNeg": 27553581,
            "deathIncrease": 284,
            "hospitalizedIncrease": 824,
            "negativeIncrease": 437722,
            "positiveIncrease": 27036,
            "totalTestResultsIncrease": 464758,

     */
}
export default {usStats}
