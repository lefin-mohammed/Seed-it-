// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyArmlRMHkxHsjTiw-V-gZUxgVTG_r5xdoo",
    authDomain: "seed-it-1d329.firebaseapp.com",
    databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seed-it-1d329",
    storageBucket: "seed-it-1d329.firebasestorage.app",
    messagingSenderId: "212981636740",
    appId: "1:212981636740:web:cc49064b6f5e93e57decd1",
    measurementId: "G-EDLJ004ZLH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to save data
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Stop page refresh

    // Get user inputs
    const username = document.querySelector("input[name='username']").value.trim();
    const age = document.getElementById("age").value.trim();
    const amount = document.getElementById("amount").value.trim();

    // Validate inputs
    if (username === "" || age === "" || amount === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Save data to Firebase
    database.ref("users").push({
        username: username,
        age: age,
        amount: amount,
        timestamp: new Date().toISOString()
    }).then(() => {
        showSuccessAnimation(); // Show animation
    }).catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Check the console.");
    });

    // Clear input fields
    document.querySelector("input[name='username']").value = "";
    document.getElementById("age").value = "";
    document.getElementById("amount").value = "";
});

// Function to show success animation
function showSuccessAnimation() {
    const animationDiv = document.createElement("div");
    animationDiv.classList.add("success-animation");
    animationDiv.innerText = "✅ Transaction Successfully Completed!";
    document.body.appendChild(animationDiv);

    setTimeout(() => {
        animationDiv.remove();
    }, 3000);
}
