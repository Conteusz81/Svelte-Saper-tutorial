<script context="module">
    import request from '../data/request';
    export async function preload() {
        try {
            const usStats = await request.usStats();
            const historicUS = await request.historicUS();
            const statesTable = await request.statesTableData();
            return { usStats, historicUS, statesTable }
        } catch (e) {
            this.error(500, 'There was error in calling the api, please try again in 5 minutes.');
        }
    }
</script>

<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let usStats;
    export let historicUS;
    export let statesTable;
    console.log(statesTable);
</script>

<svelte:head>
    <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid - 19 US</h1>
    </div>
</div>

<CovidStat {...usStats} />
<CovidChart historicData={historicUS} title="US Covid-19" />
<TableContainer />
