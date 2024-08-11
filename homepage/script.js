// Chart.js Configuration
let cropProductionChart, rainfallChart, soilQualityChart, marketPricesChart, pestAlertsChart;

function initCharts(crop = 'Wheat', timePeriod = 'Jan-July', region = 'India') {
    // Example data based on the selected region
    const productionData = {
        'India': {
            'Wheat': [400, 520, 460, 330, 280],
            'Rice': [350, 480, 400, 340, 290],
            'Corn': [300, 400, 350, 310, 270],
            'Soybean': [250, 330, 300, 280, 240],
            'Barley': [220, 300, 280, 260, 230],
            'Oats': [180, 250, 220, 210, 200],
            'Sorghum': [160, 220, 210, 190, 180],
            'Millet': [200, 270, 240, 230, 210],
            'Rye': [170, 240, 210, 200, 190],
            'Quinoa': [190, 260, 230, 220, 210],
            'Buckwheat': [150, 210, 190, 180, 170]
        }[crop] || [],
        'California': { /* existing data */ }[crop] || [],
        'Texas': { /* existing data */ }[crop] || [],
        'Florida': { /* existing data */ }[crop] || []
    }[region] || [];

    const rainfallData = {
        'India': timePeriod === 'Jan-July' ? [55, 75, 115, 160, 210, 320, 270] : [110, 160, 210, 190, 230, 300, 330],
        'California': { /* existing data */ }[timePeriod] || [],
        'Texas': { /* existing data */ }[timePeriod] || [],
        'Florida': { /* existing data */ }[timePeriod] || []
    }[region] || [];

    const marketPricesData = {
        'India': {
            'Wheat': [130, 140, 120, 150, 160],
            'Rice': [110, 120, 130, 140, 150],
            'Corn': [140, 150, 130, 160, 170],
            'Soybean': [120, 130, 140, 150, 160],
            'Barley': [110, 120, 130, 140, 150],
            'Oats': [100, 110, 120, 130, 140],
            'Sorghum': [110, 120, 130, 140, 150],
            'Millet': [120, 130, 140, 150, 160],
            'Rye': [130, 140, 150, 160, 170],
            'Quinoa': [140, 150, 160, 170, 180],
            'Buckwheat': [150, 160, 170, 180, 190]
        }[crop] || [],
        'California': { /* existing data */ }[crop] || [],
        'Texas': { /* existing data */ }[crop] || [],
        'Florida': { /* existing data */ }[crop] || []
    }[region] || [];

    const pestAlertsData = {
        'India': [6, 11, 8, 13, 9],
        'California': { /* existing data */ } || [],
        'Texas': { /* existing data */ } || [],
        'Florida': { /* existing data */ } || []
    }[region] || [];

    // Destroy previous charts if they exist
    if (cropProductionChart) cropProductionChart.destroy();
    if (rainfallChart) rainfallChart.destroy();
    if (soilQualityChart) soilQualityChart.destroy();
    if (marketPricesChart) marketPricesChart.destroy();
    if (pestAlertsChart) pestAlertsChart.destroy();

    // Crop Production Chart
    cropProductionChart = new Chart(document.getElementById('cropProductionChart'), {
        type: 'bar',
        data: {
            labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Barley', 'Oats', 'Sorghum', 'Millet', 'Rye', 'Quinoa', 'Buckwheat'],
            datasets: [{
                label: 'Production (tons)',
                data: productionData,
                backgroundColor: '#4caf50'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });

    // Rainfall Chart
    rainfallChart = new Chart(document.getElementById('rainfallChart'), {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Rainfall (mm)',
                data: rainfallData,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Soil Quality Chart
    soilQualityChart = new Chart(document.getElementById('soilQualityChart'), {
        type: 'radar',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Organic Matter'],
            datasets: [{
                label: 'Soil Quality',
                data: [80, 90, 70, 60, 85],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: 'rgba(255, 159, 64, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });

    // Market Prices Chart
    marketPricesChart = new Chart(document.getElementById('marketPricesChart'), {
        type: 'bar',
        data: {
            labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Barley', 'Oats', 'Sorghum', 'Millet', 'Rye', 'Quinoa', 'Buckwheat'],
            datasets: [{
                label: 'Market Prices (USD/ton)',
                data: marketPricesData,
                backgroundColor: '#ff9800'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });

    // Pest Alerts Chart
    pestAlertsChart = new Chart(document.getElementById('pestAlertsChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Pest Alerts',
                data: pestAlertsData,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial Chart Load
initCharts();

// Form Handling
const dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const crop = document.getElementById('cropSelect').value;
    const timePeriod = document.getElementById('timePeriod').value;
    const region = document.getElementById('regionSelect').value;
    initCharts(crop, timePeriod, region);
});
