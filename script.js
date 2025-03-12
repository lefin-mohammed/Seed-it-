// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Firebase Configuration (Replace with your Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "seed-it-1d329.firebaseapp.com",
    databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seed-it-1d329",
    storageBucket: "seed-it-1d329.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form Submission
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

    // Push data to Firebase
    const userRef = ref(database, "users");
    push(userRef, {
        username: username,
        age: age,
        amount: amount,
        timestamp: new Date().toISOString()
    }).then(() => {
        alert("Data saved successfully!");
        loadData(); // Refresh displayed data
    }).catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Check the console.");
    });
});

// Function to fetch and display data
function loadData() {
    const userRef = ref(database, "users");
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h3>Saved Data:</h3>";

        if (data) {
            Object.values(data).forEach(user => {
                outputDiv.innerHTML += `
                    <p>🟢 <strong>${user.username}</strong> | Age: ${user.age} | Amount: ₹${user.amount}</p>
                `;
            });
        }
    });
}

// Load existing data on page load
window.onload = loadData;
