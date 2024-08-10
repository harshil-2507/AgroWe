document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');

    window.showForm = function () {
        const stage = document.getElementById('harvestStage').value;
        let formHtml = '';

        // Common form fields for all stages
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
            <input type="number" id="Soil_Type" name="Soil_Type" placeholder="black, red, etc." required><br>
        `;

        // Watering Frequency field
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
                        <!-- Additional fields specific to Beginning stage can be added here -->
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
                        <!-- Additional fields specific to Mid-Season stage can be added here -->
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
                        <!-- Additional fields specific to Pre-Harvest stage can be added here -->
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
        // Handle form submission logic here
        alert('Form submitted!');
        // You can use FormData and send data via fetch or XMLHttpRequest to the server here
    };
});
