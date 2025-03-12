// Firebase Config (Replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://seed-it-1d329-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seed-it-1d329",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle Form Submission
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.querySelector("input[name='username']").value.trim();
    const age = document.getElementById("age").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (username === "" || age === "" || amount === "") {
        alert("Please fill in all fields!");
        return;
    }

    const newUserRef = database.ref("users").push();
    newUserRef.set({ username, age, amount }).then(() => {
        alert("Data saved successfully!");
    }).catch(error => {
        console.error("Error:", error);
    });
});
