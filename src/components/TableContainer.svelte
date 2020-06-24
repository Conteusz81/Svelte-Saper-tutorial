<script>
    import TableFilter from './TableFilter.svelte'
    import Table from './Table.svelte'

    export let statesTable;
    $: states = statesTable;
</script>

<TableFilter />
<Table {states}/>
