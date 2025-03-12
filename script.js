// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seed-it-1d329",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to save data to Firebase
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    // Get user input values
    const username = document.getElementById("username").value.trim();
    const age = document.getElementById("age").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const successMessage = document.getElementById("success-message");

    if (!username || !age || !amount) {
        alert("Please fill in all fields!");
        return;
    }

    // Save data to Firebase
    const userRef = ref(database, "users/" + username);
    set(userRef, {
        username: username,
        age: age,
        amount: amount,
        timestamp: new Date().toISOString()
    }).then(() => {
        successMessage.classList.remove("hidden");
        successMessage.classList.add("show");

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove("show");
            successMessage.classList.add("hidden");
        }, 3000);
    }).catch(error => {
        console.error("Error:", error);
        alert("Failed to save data.");
    });
});
