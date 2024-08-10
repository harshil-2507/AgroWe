function submitTimePeriod() {
    const form = document.getElementById('timePeriodForm');
    const selectedOption = form.querySelector('input[name="timePeriod"]:checked');
    
    if (selectedOption) {
        localStorage.setItem('cropTimePeriod', selectedOption.value);
        window.location.href = 'form.html'; // Redirect to the main form page
    } else {
        alert('Please select a time period.');
    }
}
