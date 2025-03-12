// ✅ FIREBASE CONFIG (Replace with your actual Firebase details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "seed-it-1d329.firebaseapp.com",
    databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seed-it-1d329",
    storageBucket: "seed-it-1d329.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ Function to save data
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const age = document.getElementById("age").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (username === "" || age === "" || amount === "") {
        alert("Please fill in all fields!");
        return;
    }

    const userData = {
        username: username,
        age: age,
        amount: amount,
        timestamp: new Date().toISOString()
    };

    db.ref("users").push(userData)
        .then(() => {
            alert("Data saved successfully!");
            loadData();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Check the console.");
        });
});

// ✅ Function to fetch & display data
function loadData() {
    db.ref("users").once("value", (snapshot) => {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h3>Saved Data:</h3>";

        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            outputDiv.innerHTML += `
                <p>🟢 <strong>${data.username}</strong> | Age: ${data.age} | Amount: ₹${data.amount}</p>
            `;
        });
    });
}

// ✅ Load existing data on page load
window.onload = loadData;
