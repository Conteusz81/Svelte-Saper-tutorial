<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import Chart from 'chart.js';

    export let historicData;
    export let title;

    let chart;
    let chartElement;
    let hideChart = false;

    onMount(() => {
        if (historicData && document.body.clientWidth > 680) {
            createChart();
            return;
        }
        hideChart = true;
    });

    onDestroy(() => chart && chart.destroy());

    // function handleResize() {
    //     console.log("XXXXXX", historicData, chartElement);
    //     if (historicData && document.body.clientWidth > 680) {
    //         createChart();
    //         return;
    //     }
    //     hideChart = true;
    // }


    function createChart() {
        chart = new Chart(chartElement.getContext('2d'), {
            type: 'line',
            data: {
                datasets: historicData,
            },
            options: {
                responsive: true,
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label;
                            label += ': ';
                            label += tooltipItem.yLabel.toLocaleString();
                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: title
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                parser: 'M/D/YY',
                                tooltipFormat: 'll'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Date'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true
                            },
                            ticks: {
                               beginAtZero: true,
                               userCallback: function (value, index, values) {
                                  return value.toLocaleString();
                               }
                            }
                        }
                    ]
                }
            }
        })
    }
</script>

<!--<svelte:window on:resize={handleResize}/>-->

{#if !hideChart}
<div class="container">
    <canvas bind:this={chartElement}></canvas>
</div>
{/if}
