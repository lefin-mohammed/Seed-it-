// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArmlRMHkxHsjTiw-V-gZUxgVTG_r5xdoo",
  authDomain: "seed-it-1d329.firebaseapp.com",
  databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "seed-it-1d329",
  storageBucket: "seed-it-1d329.appspot.com",
  messagingSenderId: "212981636740",
  appId: "1:212981636740:web:cc49064b6f5e93e57decd1",
  measurementId: "G-EDLJ004ZLH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

// Function to save data to Firebase
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Stop page refresh

    // Get user inputs
    const username = document.querySelector("input[name='username']").value.trim();
    const age = document.getElementById("age").value.trim();
    const amount = document.getElementById("amount").value.trim();

    // Validate inputs
    if (!username || !age || !amount) {
        alert("Please fill in all fields!");
        return;
    }

    // Save data to Firebase
    database.ref("users").push({
        username,
        age,
        amount,
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
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Saved Data:</h3>";

    database.ref("users").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            outputDiv.innerHTML += `
                <p>🟢 <strong>${data.username}</strong> | Age: ${data.age} | Amount: ₹${data.amount}</p>
            `;
        });
    });
}

// Load existing data on page load
window.onload = loadData;
