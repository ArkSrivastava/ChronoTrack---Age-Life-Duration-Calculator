function calculateAge() {
    let dobInput = document.getElementById('dob').value;
    let result = document.getElementById('result');
    let lifeDuration = document.getElementById('lifeDuration');
    
    if (!dobInput) {
        result.innerText = "Please select a valid date";
        result.style.color = "#ff4500";
        return;
    }
    
    let dobDate = new Date(dobInput);
    function updateLifeDuration() {
        let today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        let monthDiff = today.getMonth() - dobDate.getMonth();
        let dayDiff = today.getDate() - dobDate.getDate();
        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        
        let totalSeconds = Math.floor((today - dobDate) / 1000);
        let totalMinutes = Math.floor(totalSeconds / 60);
        let totalHours = Math.floor(totalMinutes / 60);
        let totalDays = Math.floor(totalHours / 24);
        
        result.innerText = `You are ${age} years old 🎂!`;
        result.style.color = "#0ef";
        
        lifeDuration.innerText = `You've lived for: \n ${totalDays} days, \n ${totalHours} hours, \n ${totalMinutes} minutes, \n ${totalSeconds} seconds 🕰️`;
        lifeDuration.style.color = "#ff7b00";
    }
    
    updateLifeDuration();
    setInterval(updateLifeDuration, 1000);
}

document.getElementById('calculateBtn').addEventListener('click', calculateAge);
document.getElementById('dob').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') calculateAge();
});
