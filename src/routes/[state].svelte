<script context="module">
    import stateNames from '../data/stateNames';
    import request from '../data/request';

    export async function preload(page) {
        const state = page.params['state'].toUpperCase();

        if (stateNames.find(s => s.abbreviation === state) === undefined) {
            this.error(404, 'State Not Found');
            return;
        }
        const fullStateName = stateNames.find(s => s.abbreviation === state).name;
        try {
            const stats = await request.stateStats(state);
            const historicState = await request.historicState(state);
            return { state: fullStateName, stats, historicState }
        } catch (e) {
            this.error(500, 'There was error in calling the api, please try again in 5 minutes.');
        }
    }
</script>

<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let state;
    export let stats;
    export let historicState;
</script>

<svelte:head>
    <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state}</h1>
    </div>
</div>

<CovidStat {...stats}/>
<CovidChart historicData={historicState} title="Covid 19 - {state}"/>
