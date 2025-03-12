/* General Page Styling */
body {
    background-color: #121212; /* Dark background */
    color: #ffffff; /* White text */
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

/* Container for content */
.container {
    width: 90%;
    max-width: 400px;
    background: #1e1e1e; /* Slightly lighter black */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    margin: 50px auto;
}

/* Heading */
h2, h3 {
    color: #00ff99; /* Soft green */
}

/* Input Fields */
input[type="text"], input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background: #333;
    color: white;
    font-size: 16px;
}

/* Placeholder Text */
input::placeholder {
    color: #bbb;
}

/* Submit Button */
input[type="submit"] {
    width: 100%;
    background-color: #00ff99; /* Green button */
    color: #121212;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

input[type="submit"]:hover {
    background-color: #00cc77; /* Darker green on hover */
}

/* Thank You Text */
p {
    font-size: 14px;
    color: #bbb;
}

/* Success Animation */
.success-animation {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 255, 0, 0.9);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
    animation: fadeOut 3s ease-in-out;
}

@keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
