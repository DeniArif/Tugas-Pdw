// script.js

// Function to update the greeting based on current time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    document.getElementById('greeting').innerText = greeting;
  }
  
  // Function to update current time
  function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('current-time').innerText = formattedTime;
  }
  
  // Update greeting and time every second
  setInterval(() => {
    updateGreeting();
    updateTime();
  }, 1000);
  