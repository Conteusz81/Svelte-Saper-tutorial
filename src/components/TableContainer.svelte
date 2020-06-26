<script>
    import TableFilter from './TableFilter.svelte'
    import Table from './Table.svelte'

    export let statesTable;
    let sortBy = 'fullStateName';
    let stateName = '';
    $: states = filterAndSort(statesTable, stateName, sortBy);

    function filterAndSort(statesData, stateName, sortBy) {
        const filteredStates = statesData.filter(state => {
           return (stateName === '' ||
                  state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1)
        });

        if (sortBy !== 'fullStateName') {
            return filteredStates.sort((a, b) => {
                return +(b[sortBy].replace(/[\s,]/g, "")) - +(a[sortBy].replace(/[\s,]/g, ""));
            });
        }
        return filteredStates;
    }
</script>

<TableFilter bind:sortBy bind:stateName/>
<Table { states }/>
