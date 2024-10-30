document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const reason = document.getElementById("reason").value;

    console.log("Name:", name);
    console.log("Roll Number:", rollNumber);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Reason:", reason);

    alert("Leave application submitted successfully!");

});