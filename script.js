document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');

    window.showForm = function () {
        const stage = document.getElementById('harvestStage').value;
        let formHtml = '';

        const commonFields = `
            <label for="Calcium">Calcium:</label>
            <input type="number" id="Calcium" name="Calcium" required><br>
            <label for="Iron">Iron:</label>
            <input type="number" id="Iron" name="Iron" required><br>
            <label for="Magnesium">Magnesium:</label>
            <input type="number" id="Magnesium" name="Magnesium" required><br>
            <label for="Nitrogen">Nitrogen:</label>
            <input type="number" id="Nitrogen" name="Nitrogen" required><br>
            <label for="O2_Level">O2 Level in air:</label>
            <input type="number" id="O2_Level" name="O2_Level" required><br>
            <label for="Phosphorous">Phosphorous:</label>
            <input type="number" id="Phosphorous" name="Phosphorous" required><br>
            <label for="Potassium">Potassium:</label>
            <input type="number" id="Potassium" name="Potassium" required><br>
            <label for="Soil_Type">Soil Type:</label>
            <input type="text" id="Soil_Type" name="Soil_Type" placeholder="black, red, etc." required><br>
        `;

        const wateringField = `
            <label for="Watering_Frequency">Watering Frequency:</label>
            <input type="number" id="Watering_Frequency" name="Watering_Frequency" required><br>
        `;

        switch (stage) {
            case 'Beginning':
                formHtml = `
                    <h2>Beginning Stage Form</h2>
                    <form id="beginningForm">
                        ${commonFields}
                        <button type="button" onclick="submitForm()">Submit</button>
                    </form>
                `;
                break;
            case 'Mid-Season':
                formHtml = `
                    <h2>Mid-Season Form</h2>
                    <form id="midSeasonForm">
                        ${commonFields}
                        ${wateringField}
                        <button type="button" onclick="submitForm()">Submit</button>
                    </form>
                `;
                break;
            case 'Pre-Harvest':
                formHtml = `
                    <h2>Pre-Harvest Form</h2>
                    <form id="preHarvestForm">
                        ${commonFields}
                        ${wateringField}
                        <button type="button" onclick="submitForm()">Submit</button>
                    </form>
                `;
                break;
            default:
                formHtml = '<p>Please select a valid harvest stage.</p>';
        }

        formContainer.innerHTML = formHtml;
        formContainer.style.display = 'block';
    };

    window.submitForm = function () {
        // Collect form data
        const formData = new FormData(document.querySelector('form'));

        // Define ideal values for comparison
        const idealValues = {
            Calcium: 50,
            Iron: 10,
            Magnesium: 30,
            Nitrogen: 20,
            O2_Level: 21,
            Phosphorous: 15,
            Potassium: 25
        };

        // Collect user's data from the form
        const userData = {};
        formData.forEach((value, key) => {
            if (idealValues.hasOwnProperty(key)) {
                userData[key] = parseFloat(value);
            }
        });

        // Calculate the differences and update the table
        const tableBody = document.getElementById('recommendationTable').querySelector('tbody');
        tableBody.innerHTML = ''; // Clear previous table data

        const nutrients = Object.keys(idealValues);
        const differences = nutrients.map(nutrient => {
            const difference = userData[nutrient] - idealValues[nutrient];
            const recommendation = difference > 0 ? 
                `You should subtract ${Math.abs(difference)} quantity of ${nutrient}` : 
                `You should add ${Math.abs(difference)} quantity of ${nutrient}`;
            
            // Populate the table
            const row = `<tr><td>${nutrient}</td><td>${recommendation}</td></tr>`;
            tableBody.insertAdjacentHTML('beforeend', row);
            
            return difference;
        });

        // Generate the comparison chart
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        const comparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nutrients,
                datasets: [
                    {
                        label: 'Ideal Values',
                        data: Object.values(idealValues),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'User Values',
                        data: Object.values(userData),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
});
