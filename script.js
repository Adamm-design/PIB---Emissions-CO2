document.addEventListener('DOMContentLoaded', function() {
    const years = ['1990', '1995', '2000', '2005', '2010', '2015', '2020'];
    
    // Données combinées
    const combinedData = {
        labels: years,
        datasets: [
            // Données CO2
            {
                label: 'CO2 - États-Unis',
                data: [5120, 5408, 6003, 6132, 5856, 5371, 4890],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
                yAxisID: 'y-co2',
                type: 'line'
            },
            {
                label: 'CO2 - UE',
                data: [4230, 3990, 3950, 4010, 3720, 3470, 3050],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgb(54, 162, 235)',
                yAxisID: 'y-co2',
                type: 'line'
            },
            {
                label: 'CO2 - Japon',
                data: [1150, 1240, 1260, 1280, 1250, 1190, 1080],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                yAxisID: 'y-co2',
                type: 'line'
            },
            // Données PIB
            {
                label: 'PIB - États-Unis',
                data: [5980, 7664, 10252, 13037, 14992, 18219, 20937],
                borderColor: 'rgba(255, 99, 132, 0.5)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderDash: [5, 5],
                yAxisID: 'y-gdp',
                type: 'line'
            },
            {
                label: 'PIB - UE',
                data: [6446, 8906, 8905, 13968, 16946, 16434, 15292],
                borderColor: 'rgba(54, 162, 235, 0.5)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderDash: [5, 5],
                yAxisID: 'y-gdp',
                type: 'line'
            },
            {
                label: 'PIB - Japon',
                data: [3103, 5449, 4731, 4755, 5700, 4389, 4937],
                borderColor: 'rgba(75, 192, 192, 0.5)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderDash: [5, 5],
                yAxisID: 'y-gdp',
                type: 'line'
            }
        ]
    };

    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Émissions de CO2 et PIB par Pays (1990-2020)'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y;
                        if (context.dataset.yAxisID === 'y-co2') {
                            return `${label}: ${value} Mt CO2`;
                        } else {
                            return `${label}: ${value} Mrd USD`;
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Année'
                }
            },
            'y-co2': {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Émissions de CO2 (millions de tonnes)'
                }
            },
            'y-gdp': {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'PIB (milliards USD)'
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    };

    // Création du graphique combiné
    new Chart(document.getElementById('combinedChart').getContext('2d'), {
        type: 'line',
        data: combinedData,
        options: options
    });
});
